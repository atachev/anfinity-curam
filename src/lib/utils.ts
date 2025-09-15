import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Builds image URL based on environment
 * In production, returns the URL as-is (assuming it's absolute)
 * In development, prepends the base URL to relative paths
 */
export function buildImageUrl(url: string | undefined): string {
  if (!url) return "";

  // In production, return URL as-is (should be absolute from CMS)
  if (process.env.NODE_ENV === "production") {
    return url;
  }

  // In development, prepend the base URL for relative paths
  const baseUrl = process.env.NEXT_PUBLIC_IMAGES_URL || "";
  return `${baseUrl}${url}`;
}
