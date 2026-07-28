type ClassValue = string | false | null | undefined;

/**
 * Joins class names and normalizes whitespace (collapses repeated spaces and
 * trims). Keeping the emitted `className` free of trailing/duplicate spaces
 * makes SSR output stable so it can't be "re-formatted" by browser extensions,
 * avoiding whitespace-only hydration mismatches.
 */
export function cn(...parts: ClassValue[]): string {
  return parts.filter(Boolean).join(" ").replace(/\s+/g, " ").trim();
}
