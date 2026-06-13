import type { Property, PropertyUnit } from "@/content/properties";

export function unitSlug(unit: PropertyUnit) {
  if (unit.slug) {
    return unit.slug;
  }

  return unit.title
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export function getUnitBySlug(property: Property, slug: string) {
  return property.units.find((unit) => unitSlug(unit) === slug);
}

export function unitImage(property: Property, index: number) {
  return property.gallery[index % property.gallery.length] ?? {
    src: property.imageSrc,
    alt: property.imageAlt,
  };
}
