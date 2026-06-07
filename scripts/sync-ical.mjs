import { readFileSync } from "node:fs";
import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "@prisma/client";

function loadDotEnv() {
  try {
    const envFile = readFileSync(".env", "utf8");

    for (const line of envFile.split("\n")) {
      const trimmed = line.trim();

      if (!trimmed || trimmed.startsWith("#") || !trimmed.includes("=")) {
        continue;
      }

      const [key, ...valueParts] = trimmed.split("=");
      const value = valueParts.join("=").replace(/^"|"$/g, "");

      if (!process.env[key]) {
        process.env[key] = value;
      }
    }
  } catch {
    // The script can run with DATABASE_URL provided directly by the environment.
  }
}

function unfoldIcal(input) {
  return input.replace(/\r?\n[ \t]/g, "");
}

function parseIcalDate(value) {
  const dateValue = value.includes(":") ? value.split(":").pop() : value;

  if (!dateValue) {
    return null;
  }

  const dateMatch = /^(\d{4})(\d{2})(\d{2})/.exec(dateValue);

  if (!dateMatch) {
    return null;
  }

  const [, year, month, day] = dateMatch;

  return new Date(Date.UTC(Number(year), Number(month) - 1, Number(day)));
}

function parseIcalEvents(input) {
  const unfolded = unfoldIcal(input);
  const events = [];
  const eventBlocks = unfolded.match(/BEGIN:VEVENT[\s\S]*?END:VEVENT/g) ?? [];

  for (const block of eventBlocks) {
    const lines = block.split(/\r?\n/);
    const startLine = lines.find((line) => line.startsWith("DTSTART"));
    const endLine = lines.find((line) => line.startsWith("DTEND"));

    if (!startLine || !endLine) {
      continue;
    }

    const start = parseIcalDate(startLine);
    const end = parseIcalDate(endLine);

    if (!start || !end || end <= start) {
      continue;
    }

    events.push({ start, end });
  }

  return events;
}

async function fetchIcal(url) {
  const response = await fetch(url, {
    redirect: "follow",
    signal: AbortSignal.timeout(20_000),
  });

  if (!response.ok) {
    throw new Error(`HTTP ${response.status}`);
  }

  return response.text();
}

function readFeedConfig() {
  const configPath = process.env.ICAL_FEEDS_FILE ?? "config/ical-feeds.json";
  const config = JSON.parse(readFileSync(configPath, "utf8"));

  if (!config.properties || typeof config.properties !== "object") {
    throw new Error("Invalid iCal feed config. Expected properties object.");
  }

  return config;
}

loadDotEnv();

if (!process.env.DATABASE_URL) {
  throw new Error("DATABASE_URL is required to sync iCal feeds.");
}

const adapter = new PrismaPg({
  connectionString: process.env.DATABASE_URL,
});
const prisma = new PrismaClient({ adapter });
const config = readFeedConfig();
const syncedAt = new Date();

try {
  for (const [slug, feeds] of Object.entries(config.properties)) {
    const property = await prisma.property.findUnique({
      where: { slug },
      select: { id: true, name: true },
    });

    if (!property) {
      console.warn(`Skipping ${slug}: property not found.`);
      continue;
    }

    await prisma.blockedDate.deleteMany({
      where: {
        propertyId: property.id,
        OR: [
          { source: { startsWith: "ical:" } },
          { source: "seed:wsc-calendar-sync-placeholder" },
        ],
      },
    });

    let created = 0;
    let failed = 0;

    for (const feed of feeds) {
      try {
        const ical = await fetchIcal(feed.url);
        const events = parseIcalEvents(ical);

        if (events.length > 0) {
          await prisma.blockedDate.createMany({
            data: events.map((event) => ({
              propertyId: property.id,
              start: event.start,
              end: event.end,
              source: `ical:${feed.label}`,
              syncedAt,
            })),
          });
        }

        created += events.length;
      } catch (error) {
        failed += 1;
        console.warn(
          `Failed ${property.name} / ${feed.label}: ${
            error instanceof Error ? error.message : "unknown error"
          }`,
        );
      }
    }

    console.log(
      `${property.name}: synced ${created} blocked interval(s), ${failed} failed feed(s).`,
    );
  }
} finally {
  await prisma.$disconnect();
}
