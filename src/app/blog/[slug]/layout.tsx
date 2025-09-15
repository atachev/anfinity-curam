import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog | Anfinity",
  description:
    "Stay informed with our latest articles, industry insights, and company updates",
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
