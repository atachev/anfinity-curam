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
  debugger;

  // If URL is already absolute, return as-is
  if (process.env.NODE_ENV === "production") {
    return url;
  }

  // For relative URLs, prepend the base URL
  const baseUrl = process.env.NEXT_PUBLIC_API_URL || "";
  return `${baseUrl}${url}`;
}
