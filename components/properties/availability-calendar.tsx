"use client";

import { useEffect, useMemo, useState } from "react";
import {
  addUtcDays,
  addUtcMonths,
  formatDateInput,
  getUtcMonthDays,
  parseDateInput,
  startOfUtcMonth,
} from "@/lib/date";
import { cn } from "@/lib/cn";

type AvailabilityCalendarProps = {
  propertySlug: string;
  propertyName: string;
};

type BlockedDate = {
  start: string;
  end: string;
  source: string;
  syncedAt: string;
};

type AvailabilityResponse = {
  month: string;
  blockedDates: BlockedDate[];
};

const formatter = new Intl.DateTimeFormat("en-GB", {
  month: "long",
  year: "numeric",
});

const weekdayLabels = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

function monthQuery(date: Date) {
  return formatDateInput(date).slice(0, 7);
}

function isSameDay(first: Date, second: Date) {
  return formatDateInput(first) === formatDateInput(second);
}

function getBlockedDays(blockedDates: BlockedDate[]) {
  const days = new Set<string>();

  for (const blockedDate of blockedDates) {
    const start = parseDateInput(blockedDate.start);
    const end = parseDateInput(blockedDate.end);

    if (!start || !end) {
      continue;
    }

    for (let date = start; date < end; date = addUtcDays(date, 1)) {
      days.add(formatDateInput(date));
    }
  }

  return days;
}

export function AvailabilityCalendar({
  propertySlug,
  propertyName,
}: AvailabilityCalendarProps) {
  const [visibleMonth, setVisibleMonth] = useState(() =>
    startOfUtcMonth(new Date()),
  );
  const [blockedDates, setBlockedDates] = useState<BlockedDate[]>([]);
  const [status, setStatus] = useState<"loading" | "ready" | "error">(
    "loading",
  );

  useEffect(() => {
    const controller = new AbortController();

    async function loadAvailability() {
      setStatus("loading");

      try {
        const response = await fetch(
          `/api/properties/${propertySlug}/availability?month=${monthQuery(
            visibleMonth,
          )}`,
          { signal: controller.signal },
        );

        if (!response.ok) {
          throw new Error("Could not load availability.");
        }

        const payload = (await response.json()) as AvailabilityResponse;
        setBlockedDates(payload.blockedDates);
        setStatus("ready");
      } catch {
        if (!controller.signal.aborted) {
          setBlockedDates([]);
          setStatus("error");
        }
      }
    }

    loadAvailability();

    return () => controller.abort();
  }, [propertySlug, visibleMonth]);

  const days = useMemo(() => getUtcMonthDays(visibleMonth), [visibleMonth]);
  const blockedDays = useMemo(
    () => getBlockedDays(blockedDates),
    [blockedDates],
  );
  const leadingOffset = (visibleMonth.getUTCDay() + 6) % 7;
  const today = startOfUtcMonth(new Date());

  return (
    <div className="rounded-lg border border-outline-soft bg-surface p-5 sm:p-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-xs font-semibold tracking-[0.15em] text-brass-deep uppercase">
            Live availability
          </p>
          <h2 className="mt-2 font-serif text-3xl leading-tight font-normal text-midnight">
            {formatter.format(visibleMonth)}
          </h2>
        </div>
        <div className="grid grid-cols-2 gap-2">
          <button
            type="button"
            className="min-h-11 rounded border border-outline-soft px-4 text-xs font-semibold tracking-[0.12em] text-midnight uppercase transition-colors hover:border-midnight disabled:cursor-not-allowed disabled:opacity-40"
            disabled={visibleMonth <= today}
            onClick={() => setVisibleMonth((month) => addUtcMonths(month, -1))}
          >
            Previous
          </button>
          <button
            type="button"
            className="min-h-11 rounded border border-midnight bg-midnight px-4 text-xs font-semibold tracking-[0.12em] text-white uppercase transition-colors hover:bg-transparent hover:text-midnight"
            onClick={() => setVisibleMonth((month) => addUtcMonths(month, 1))}
          >
            Next
          </button>
        </div>
      </div>

      <div className="mt-6 grid grid-cols-7 gap-2">
        {weekdayLabels.map((weekday) => (
          <div
            key={weekday}
            className="text-center text-[0.68rem] font-semibold tracking-[0.12em] text-charcoal uppercase"
          >
            {weekday}
          </div>
        ))}
        {Array.from({ length: leadingOffset }).map((_, index) => (
          <div key={`empty-${index}`} className="aspect-square" />
        ))}
        {days.map((day) => {
          const dayKey = formatDateInput(day);
          const isBlocked = blockedDays.has(dayKey);
          const isToday = isSameDay(day, new Date());

          return (
            <div
              key={dayKey}
              className={cn(
                "flex aspect-square items-center justify-center rounded border text-sm font-semibold transition-colors",
                isBlocked
                  ? "border-rose-200 bg-rose-100 text-rose-900"
                  : "border-emerald-200 bg-emerald-50 text-emerald-900",
                isToday &&
                  "ring-2 ring-brass ring-offset-2 ring-offset-surface",
                status === "loading" && "animate-pulse",
              )}
              aria-label={`${propertyName} ${dayKey} ${
                isBlocked ? "blocked" : "available"
              }`}
            >
              {day.getUTCDate()}
            </div>
          );
        })}
      </div>

      <div className="mt-6 flex flex-col gap-3 text-sm text-charcoal sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-wrap gap-4">
          <span className="inline-flex items-center gap-2">
            <span className="h-3 w-3 rounded-full bg-emerald-100 ring-1 ring-emerald-300" />
            Available
          </span>
          <span className="inline-flex items-center gap-2">
            <span className="h-3 w-3 rounded-full bg-rose-100 ring-1 ring-rose-300" />
            Blocked
          </span>
        </div>
        {status === "loading" ? (
          <p>Loading calendar data...</p>
        ) : status === "error" ? (
          <p className="text-rose-800">
            Calendar feed unavailable. Please enquire to confirm dates.
          </p>
        ) : (
          <p>
            {blockedDates.length} blocked interval
            {blockedDates.length === 1 ? "" : "s"} this month.
          </p>
        )}
      </div>
    </div>
  );
}
