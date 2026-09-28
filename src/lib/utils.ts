type ClassValue = string | number | null | undefined | false;

/** Joins truthy class names together. Lightweight alternative to clsx. */
export function cn(...classes: ClassValue[]): string {
  return classes.filter(Boolean).join(" ");
}
