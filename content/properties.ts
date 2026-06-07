export type PropertyUnit = {
  title: string;
  specs: string;
  description: string;
};

export type PropertyImage = {
  src: string;
  alt: string;
};

export type Property = {
  slug: string;
  name: string;
  area: string;
  headline: string;
  description: string;
  maxGuests: number;
  bedrooms: number;
  beds: number;
  bathrooms: number;
  imageSrc: string;
  imageAlt: string;
  gallery: PropertyImage[];
  airbnbUrl?: string | null;
  amenities: string[];
  units: PropertyUnit[];
  displayOrder: number;
};

const mediaPaths = {
  chambers: [
    "/media/properties/chambers/01.jpeg",
    "/media/properties/chambers/02.jpeg",
    "/media/properties/chambers/03.jpeg",
    "/media/properties/chambers/04.jpeg",
    "/media/properties/chambers/05.jpeg",
  ],
  johnDaltonSt: [
    "/media/properties/john-dalton-st/01.jpg",
    "/media/properties/john-dalton-st/02.jpg",
    "/media/properties/john-dalton-st/03.jpg",
    "/media/properties/john-dalton-st/04.jpg",
    "/media/properties/john-dalton-st/05.jpg",
  ],
  woodStreet: [
    "/media/properties/wood-street/01.jpeg",
    "/media/properties/wood-street/02.jpg",
    "/media/properties/wood-street/03.jpg",
  ],
  theCollective: [
    "/media/properties/the-collective/01.jpeg",
    "/media/properties/the-collective/02.jpeg",
    "/media/properties/the-collective/03.jpeg",
    "/media/properties/the-collective/04.jpeg",
    "/media/properties/the-collective/05.jpeg",
  ],
  ancoats: [
    "/media/properties/ancoats/01.jpeg",
    "/media/properties/ancoats/02.jpeg",
    "/media/properties/ancoats/03.jpeg",
    "/media/properties/ancoats/04.jpeg",
    "/media/properties/ancoats/05.jpeg",
  ],
  oldTrafford: [
    "/media/properties/old-trafford/01.jpeg",
    "/media/properties/old-trafford/02.jpeg",
    "/media/properties/old-trafford/03.jpeg",
  ],
} as const;

function galleryFor(name: string, paths: readonly string[]): PropertyImage[] {
  return paths.map((src, index) => ({
    src,
    alt: `${name} property photo ${index + 1}`,
  }));
}

export const properties: Property[] = [
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
    imageSrc: mediaPaths.chambers[0],
    imageAlt: "Chapel Walks Chambers styled bedroom",
    gallery: galleryFor("Chapel Walks Chambers", mediaPaths.chambers),
    amenities: [
      "Central Manchester",
      "Fully equipped kitchen",
      "Smart TV",
      "Lift access",
      "Towels and bed linen",
      "Dishwasher",
      "Washing machine",
    ],
    units: [
      {
        title: "Penthouse 3 Bedrooms 2 Bath",
        specs: "3 bedrooms / 2 bathrooms",
        description:
          "This apartment has a wall mounted Smart TV and a fully equipped kitchen with dishwasher, microwave, washing machine, fridge and oven. The property has lift access and can provide towels and bed linen.",
      },
      {
        title: "Deluxe 5 Stars Bliss - Large 2 Bedrooms With Balcony",
        specs: "2 bedrooms / balcony",
        description:
          "Large two-bedroom apartment with flat-screen TV, satellite channels and a fully equipped kitchen with dishwasher, washing machine, fridge and oven.",
      },
      {
        title: "Stylish one Bedroom one Bath",
        specs: "1 bedroom / 1 bathroom",
        description:
          "High ceilings, big windows and skylights flood the living room with natural light, creating a quiet home away from home in the busy city centre.",
      },
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
    imageSrc: mediaPaths.johnDaltonSt[0],
    imageAlt: "John Dalton Street styled bedroom",
    gallery: galleryFor("John Dalton Street", mediaPaths.johnDaltonSt),
    amenities: [
      "Prime location",
      "Fully equipped kitchen",
      "Smart TV",
      "Luxury beds",
      "Egyptian cotton sheets",
      "Dishwasher",
      "Washing machine",
    ],
    units: [
      {
        title: "Stylish Loft Conversion",
        specs: "2 bedrooms / 1 bathroom",
        description:
          "A very central and unique living space just a few doors up from Panacea and The Restaurant Bar & Grill, close to everything Manchester has to offer.",
      },
      {
        title: "Deluxe 5 Stars Bliss",
        specs: "2 bedrooms / 2 bathrooms",
        description:
          "A stunning Victorian conversion in the heart of the city, combining original features with luxury beds, Egyptian cotton sheets and a selection of pillows.",
      },
      {
        title: "Large One Bed Conversion",
        specs: "1 bedroom",
        description:
          "A characterful conversion with a fully equipped kitchen, Smart TV and city-centre convenience for guests who want the feel of home.",
      },
      {
        title: "John Dalton Street 3rd & 4th floor",
        specs: "4 bedrooms / 3 bathrooms",
        description:
          "A larger city-centre option for groups needing more bedrooms and bathrooms across the upper floors.",
      },
      {
        title: "John Dalton Street 1st & 2nd floor",
        specs: "3 bedrooms / 3 bathrooms",
        description:
          "A spacious multi-bedroom city apartment suited to families, professionals and group stays.",
      },
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
    imageSrc: mediaPaths.woodStreet[0],
    imageAlt: "Wood Street apartment bedroom",
    gallery: galleryFor("Wood Street", mediaPaths.woodStreet),
    amenities: [
      "Two bedrooms",
      "Two bathrooms",
      "Fully equipped kitchen",
      "Smart TV",
      "Lift access",
      "Towels and bed linen",
      "Dishwasher",
    ],
    units: [
      {
        title: "Stylish two Bedrooms two Bath",
        specs: "2 bedrooms / 2 bathrooms",
        description:
          "This apartment has two bedrooms, a wall mounted Smart TV and a fully equipped kitchen with dishwasher, microwave, washing machine, fridge and oven. It is on the first floor with lift access, and towels and bed linen can be provided.",
      },
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
    imageSrc: mediaPaths.theCollective[0],
    imageAlt: "The Collective apartment bedroom",
    gallery: galleryFor("The Collective", mediaPaths.theCollective),
    amenities: [
      "Wi-Fi",
      "Private bathroom",
      "Full kitchen access",
      "Indoor coworking",
      "Outdoor coworking",
      "City views",
    ],
    units: [
      {
        title: "Private room with city views",
        specs: "2 guests / 1 bedroom / 1 private bathroom",
        description:
          "Wi-Fi, access to a full kitchen, indoor and outdoor co-working spaces, and views of the city's historic skyline. Suited to professionals, creatives and travellers seeking a connected experience.",
      },
      {
        title: "Bunkbed room",
        specs: "1 bunkbed / 1 private bathroom",
        description:
          "A compact option with private bathroom access for guests who want the location and shared workspace benefits of The Collective.",
      },
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
    imageSrc: mediaPaths.ancoats[0],
    imageAlt: "Ancoats apartment living space",
    gallery: galleryFor("Ancoats", mediaPaths.ancoats),
    amenities: [
      "Ancoats location",
      "Near Co-op Live",
      "Near Etihad Stadium",
      "Canal-side walk",
      "Private parking options",
      "Fully equipped kitchen",
      "Smart TV",
    ],
    units: [
      {
        title: "The Red Brick Mill",
        specs: "4 guests / 1 bedroom / 2 beds / 1 bathroom",
        description:
          "Modern one-bedroom apartment in a red-brick industrial mill conversion with king-size bed, stylish design and private parking. Located near Co-op Live Arena and Etihad Stadium with a canal-side walk to Manchester city centre.",
      },
      {
        title: "Ancoats Luxury Loft",
        specs: "4 guests / 2 bedrooms / 2 beds / 2 bathrooms",
        description:
          "Luxury two-bed apartment in a new mill conversion, around a 15-minute canal walk from Manchester city centre. Modern design, spacious layout and high-end finishes throughout.",
      },
      {
        title: "City Loft 3 Bedrooms With Balcony",
        specs: "2 bedrooms / balcony",
        description:
          "Large apartment with flat-screen TV, satellite channels and a fully equipped kitchen. The property offers access to a balcony with a view of Ancoats.",
      },
      {
        title: "Stylish two Bedrooms two Bath",
        specs: "2 bedrooms / 2 bathrooms",
        description:
          "Ground-floor apartment with wall mounted Smart TV, fully equipped kitchen, dishwasher, microwave, washing machine, fridge and oven.",
      },
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
    imageSrc: mediaPaths.oldTrafford[0],
    imageAlt: "Old Trafford apartment living space",
    gallery: galleryFor("Old Trafford", mediaPaths.oldTrafford),
    amenities: [
      "Free parking",
      "Two bedrooms",
      "Two bathrooms",
      "Balcony",
      "Fully equipped kitchen",
      "Flat-screen TV",
      "Dishwasher",
    ],
    units: [
      {
        title: "City Loft - Large Two Bed Two Bathroom & Free Parking",
        specs: "2 bedrooms / 2 bathrooms / free parking",
        description:
          "Large apartment with flat-screen TV, satellite channels and a fully equipped kitchen with dishwasher, washing machine, fridge and oven. The property offers access to a balcony.",
      },
    ],
    displayOrder: 6,
  },
];

export function getPropertyBySlug(slug: string) {
  return properties.find((property) => property.slug === slug);
}

export function getFeaturedProperties() {
  return properties.slice(0, 3);
}
