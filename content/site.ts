export const siteConfig = {
  name: "MCRh",
  description:
    "Short-let apartments and property management services in Manchester.",
  url: "https://mcrh.co.uk",
  contactEmail: "contato@mcrh.co.uk",
  whatsappUrl: "https://wa.me/447957785614",
  address: "8 Loom Street, Manchester",
};

export const mainNav = [
  { href: "/", label: "Home" },
  { href: "/propriedades", label: "Properties" },
  { href: "/servicos/gestao", label: "Management" },
  { href: "/servicos/design", label: "Design" },
  { href: "/sobre", label: "About" },
  { href: "/contacto", label: "Contact" },
];

export const featuredProperties = [
  {
    name: "Chapel Walks Chambers",
    area: "City Centre",
    href: "/propriedades/chambers",
    imageSrc: "/images/mcrh-hero-reference.png",
    imageAlt: "Editorial interior reference for Chapel Walks Chambers",
    specs: ["4 guests", "2 beds", "2 baths"],
  },
  {
    name: "John Dalton Street",
    area: "Deansgate",
    href: "/propriedades/john-dalton-st",
    imageSrc: "/images/mcrh-hero-reference.png",
    imageAlt: "Editorial interior reference for John Dalton Street",
    specs: ["4 guests", "2 beds", "1 bath"],
  },
  {
    name: "Ancoats Luxury Loft",
    area: "Ancoats",
    href: "/propriedades/ancoats",
    imageSrc: "/images/mcrh-hero-reference.png",
    imageAlt: "Editorial interior reference for Ancoats Luxury Loft",
    specs: ["4 guests", "2 beds", "2 baths"],
  },
];
