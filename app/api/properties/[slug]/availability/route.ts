import { NextResponse } from "next/server";
import { addUtcMonths, formatDateInput, parseDateInput } from "@/lib/date";
import { prisma } from "@/lib/prisma";

type AvailabilityRouteProps = {
  params: Promise<{
    slug: string;
  }>;
};

export async function GET(
  request: Request,
  { params }: AvailabilityRouteProps,
) {
  const { slug } = await params;
  const url = new URL(request.url);
  const monthValue = url.searchParams.get("month");
  const month = monthValue ? parseDateInput(`${monthValue}-01`) : new Date();

  if (!month) {
    return NextResponse.json(
      { error: "Expected month in YYYY-MM format." },
      { status: 400 },
    );
  }

  const monthStart = new Date(
    Date.UTC(month.getUTCFullYear(), month.getUTCMonth(), 1),
  );
  const monthEnd = addUtcMonths(monthStart, 1);

  const property = await prisma.property.findUnique({
    where: { slug },
    select: {
      id: true,
      name: true,
      blockedDates: {
        where: {
          start: { lt: monthEnd },
          end: { gt: monthStart },
        },
        orderBy: { start: "asc" },
        select: {
          start: true,
          end: true,
          source: true,
          syncedAt: true,
        },
      },
    },
  });

  if (!property) {
    return NextResponse.json({ error: "Property not found." }, { status: 404 });
  }

  return NextResponse.json({
    property: {
      slug,
      name: property.name,
    },
    month: formatDateInput(monthStart).slice(0, 7),
    blockedDates: property.blockedDates.map((blockedDate) => ({
      start: formatDateInput(blockedDate.start),
      end: formatDateInput(blockedDate.end),
      source: blockedDate.source,
      syncedAt: blockedDate.syncedAt.toISOString(),
    })),
  });
}
