import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Builds image URL based on environment
 * Handles both relative and absolute URLs from CMS
 */
export function buildImageUrl(url: string | undefined): string {
  if (!url) return "";

  // If URL is already absolute, return as-is
  if (process.env.NODE_ENV === "production") {
    return url;
  }
  // For relative URLs, prepend the base URL
  const baseUrl = process.env.NEXT_PUBLIC_IMAGES_URL || "";
  return `${baseUrl}${url}`;
}

const WORDS_PER_MINUTE = 200;

/**
 * Strips HTML tags and returns plain text for word counting.
 */
function stripHtml(html: string): string {
  if (typeof html !== "string") return "";
  return html
    .replace(/<[^>]*>/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

/**
 * Extracts text from Strapi rich text (array of blocks with children).
 */
function textFromRichText(value: unknown): string {
  if (typeof value === "string") return value;
  if (!Array.isArray(value)) return "";
  return value
    .map(
      (block: any) =>
        block?.children?.map((c: any) => c?.text ?? "").join("") ?? "",
    )
    .join(" ");
}

/**
 * Counts words in text (after stripping HTML).
 */
export function countWords(text: string): number {
  const plain = stripHtml(text);
  if (!plain) return 0;
  return plain.split(/\s+/).filter(Boolean).length;
}

/**
 * Returns reading time in minutes (rounded up, minimum 1).
 * Uses ~200 words per minute as average.
 */
export function getReadingTimeMinutes(text: string): number {
  const words = countWords(text);
  if (words === 0) return 1;
  return Math.max(1, Math.ceil(words / WORDS_PER_MINUTE));
}

/**
 * Returns a formatted reading time string, e.g. "3 min. read".
 */
export function formatReadingTime(text: string): string {
  const minutes = getReadingTimeMinutes(text);
  return `${minutes} min. read`;
}

/**
 * Gets formatted reading time from CMS content (string HTML or Strapi rich text).
 */
export function getFormattedReadingTime(content: unknown): string {
  const text =
    typeof content === "string"
      ? content
      : Array.isArray(content)
        ? content
            .map(
              (block: any) =>
                block?.children?.map((c: any) => c?.text ?? "").join("") ?? "",
            )
            .join(" ")
        : "";
  return formatReadingTime(text);
}
