import type { Metadata } from "next";
import Hero from "@/components/homepage/Hero";
import WhatWeDo from "@/components/homepage/WhatWeDo";
import Process from "@/components/homepage/Process";
import CaseStudies from "@/components/homepage/CaseStudies";
import Sticky from "@/components/homepage/Sticky";
import InfiniteLogos from "@/components/homepage/InfiniteLogos";

export const metadata: Metadata = {
  metadataBase: new URL("https://anfinity.bg"),
  title: "We craft tailor-made web and mobile products | anfinity",
  description:
    "We craft tailor-made web and mobile products that transform ideas into growth, impact, and meaningful user experiences.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: "https://anfinity.bg/",
    title: "We craft tailor-made web and mobile products | anfinity",
    description:
      "We craft tailor-made web and mobile products that transform ideas into growth, impact, and meaningful user experiences.",
    siteName: "anfinity",
    images: [
      {
        url: "https://anfinity.bg/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "anfinity",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
};

function JsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "anfinity",
    url: "https://anfinity.bg",
    logo: "https://anfinity.bg/logo.png",
    sameAs: [
      "https://www.facebook.com/profile.php?id=61579403350046",
      "https://www.linkedin.com/company/anfinity",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

export default function HomePage() {
  return (
    <main>
      <JsonLd />
      <Hero />
      <InfiniteLogos />
      <WhatWeDo />
      <Process />
      <CaseStudies />
      <Sticky />
    </main>
  );
}
