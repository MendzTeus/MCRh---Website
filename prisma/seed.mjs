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
    // The seed can still run when DATABASE_URL is provided by the environment.
  }
}

loadDotEnv();

const adapter = new PrismaPg({
  connectionString: process.env.DATABASE_URL,
});

const prisma = new PrismaClient({ adapter });

const properties = [
  {
    slug: "chambers",
    name: "Chapel Walks Chambers",
    area: "City Centre",
    headline: "Character apartments in the centre of Manchester.",
    description:
      "Chapel Walks Chambers offers a collection of city-centre apartments with original character, lift access and fully equipped kitchens for short stays and longer visits.",
    maxGuests: 6,
    bedrooms: 3,
    beds: 3,
    bathrooms: 2,
    amenities: [
      "Central Manchester",
      "Fully equipped kitchen",
      "Smart TV",
      "Lift access",
      "Towels and bed linen",
      "Dishwasher",
      "Washing machine",
    ],
    displayOrder: 1,
  },
  {
    slug: "john-dalton-st",
    name: "John Dalton Street",
    area: "Deansgate",
    headline: "Unique city living a few doors from Manchester highlights.",
    description:
      "A central collection of John Dalton Street apartments with character, style and quick access to restaurants, bars and the city centre.",
    maxGuests: 8,
    bedrooms: 4,
    beds: 4,
    bathrooms: 3,
    amenities: [
      "Prime location",
      "Fully equipped kitchen",
      "Smart TV",
      "Luxury beds",
      "Egyptian cotton sheets",
      "Dishwasher",
      "Washing machine",
    ],
    displayOrder: 2,
  },
  {
    slug: "wood-street",
    name: "Wood Street",
    area: "City Centre",
    headline: "A stylish two-bedroom apartment close to Manchester life.",
    description:
      "Wood Street is a practical and polished two-bedroom apartment with a fully equipped kitchen, Smart TV and lift access for a convenient city stay.",
    maxGuests: 4,
    bedrooms: 2,
    beds: 2,
    bathrooms: 2,
    amenities: [
      "Two bedrooms",
      "Two bathrooms",
      "Fully equipped kitchen",
      "Smart TV",
      "Lift access",
      "Towels and bed linen",
      "Dishwasher",
    ],
    displayOrder: 3,
  },
  {
    slug: "the-collective",
    name: "The Collective",
    area: "Manchester",
    headline: "A connected city stay for professionals and creatives.",
    description:
      "The Collective offers a stylish, connected stay with access to workspaces and views of Manchester's historic skyline.",
    maxGuests: 2,
    bedrooms: 1,
    beds: 1,
    bathrooms: 1,
    amenities: [
      "Wi-Fi",
      "Private bathroom",
      "Full kitchen access",
      "Indoor coworking",
      "Outdoor coworking",
      "City views",
    ],
    displayOrder: 4,
  },
  {
    slug: "ancoats",
    name: "Ancoats",
    area: "Ancoats",
    headline: "Mill conversions and character apartments near Co-op Live.",
    description:
      "A selection of Ancoats apartments in red-brick mill conversions and city loft layouts, close to Co-op Live, Etihad Stadium and Manchester city centre.",
    maxGuests: 4,
    bedrooms: 2,
    beds: 2,
    bathrooms: 2,
    amenities: [
      "Ancoats location",
      "Near Co-op Live",
      "Near Etihad Stadium",
      "Canal-side walk",
      "Private parking options",
      "Fully equipped kitchen",
      "Smart TV",
    ],
    displayOrder: 5,
  },
  {
    slug: "old-trafford",
    name: "Old Trafford",
    area: "Old Trafford",
    headline: "A large two-bedroom stay with parking near Old Trafford.",
    description:
      "A delightful Old Trafford apartment with two bedrooms, two bathrooms, free parking and a fully equipped kitchen.",
    maxGuests: 4,
    bedrooms: 2,
    beds: 2,
    bathrooms: 2,
    amenities: [
      "Free parking",
      "Two bedrooms",
      "Two bathrooms",
      "Balcony",
      "Fully equipped kitchen",
      "Flat-screen TV",
      "Dishwasher",
    ],
    displayOrder: 6,
  },
];

for (const property of properties) {
  const saved = await prisma.property.upsert({
    where: { slug: property.slug },
    update: {
      ...property,
      published: true,
    },
    create: {
      ...property,
      published: true,
    },
  });

  await prisma.mediaAsset.deleteMany({
    where: {
      propertyId: saved.id,
      path: "/images/mcrh-hero-reference.png",
    },
  });

  await prisma.mediaAsset.create({
    data: {
      propertyId: saved.id,
      type: "IMAGE",
      path: "/images/mcrh-hero-reference.png",
      alt: `${saved.name} interior reference image`,
      order: 0,
    },
  });
}

const count = await prisma.property.count();
console.log(
  `Seeded ${properties.length} MCRh properties. Total properties: ${count}.`,
);

await prisma.$disconnect();
