import { Metadata } from "next";
import Link from "next/link";
import ListingPageHero from "@/components/heros/ListingPageHero";
import Card from "@/components/services/Card";
import { getServices } from "@/lib/fetchers/getServices";

export const metadata: Metadata = {
  metadataBase: new URL("https://anfinity.bg"),
  title: "Our Services | anfinity",
  description:
    "Custom web & mobile apps, MVP development, landing pages, websites, and on-demand product teams. Explore our end-to-end software product development services.",
  alternates: {
    canonical: "/services",
  },
  openGraph: {
    type: "website",
    url: "https://anfinity.bg/services",
    title: "Our Services | anfinity",
    description:
      "Custom web & mobile apps, MVP development, landing pages, websites, and on-demand product teams. Explore our end-to-end software product development services.",
    siteName: "anfinity",
    images: [
      {
        url: "https://anfinity.bg/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Anfinity Services",
      },
    ],
  },
  robots: { index: true, follow: true },
};

export default async function ServicesPage() {
  const services: any[] = await getServices();
  return (
    <div>
      <ListingPageHero
        title="Your digital product, from idea to launch"
        description="We offer a full range of web development services designed to create user-centric solutions that enhance the human experience. With dedication and love for our craft, we build digital products that are not only visually stunning but also highly functional and performance-driven."
        textColor="#E51D28"
      />
      <div className="px-[25px] md:px-0 flex gap-[28px] flex-wrap max-w-[1140px] mx-auto align-center justify-center">
        {services?.length &&
          services.map((service: any, index: number) => (
            <Link key={service.id || index} href={`/services/${service.slug}`}>
              <Card
                title={service.name}
                description={service.cardDescription}
                dotPosition={service.dotPosition}
                mobileDotPosition={service.mobileDotPosition}
                icon={service.icon}
              />
            </Link>
          ))}
      </div>
    </div>
  );
}
