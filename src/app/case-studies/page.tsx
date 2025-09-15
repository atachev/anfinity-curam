import type { Metadata } from "next";
import StudyCard from "@/components/studies/StudyCard";
import ListingPageHero from "@/components/heros/ListingPageHero";
import { getCaseStudies } from "@/lib/fetchers/getCaseStudies";

export const metadata: Metadata = {
  metadataBase: new URL("https://anfinity.bg"),
  title: "Our case studies | anfinity",
  description:
    "Explore real-world projects across web, mobile, and platforms. See how we turn ideas into growth with scalable, user-centered software.",
  alternates: { canonical: "/case-studies" },
  openGraph: {
    type: "website",
    url: "https://anfinity.bg/case-studies",
    title: "Our case studies | anfinity",
    description:
      "Explore real-world projects across web, mobile, and platforms. See how we turn ideas into growth with scalable, user-centered software.",
    siteName: "anfinity",
    images: [
      {
        url: "https://anfinity.bg/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Anfinity Case Studies",
      },
    ],
  },
  robots: { index: true, follow: true },
};

function JsonLd({ items }: { items: { title: string; slug: string }[] }) {
  const base = "https://anfinity.bg";
  const jsonLd: Record<string, any> = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Our case studies",
    url: `${base}/case-studies`,
    description:
      "A collection of software product case studies by anfinity across web, mobile, and platforms.",
    breadcrumb: {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: `${base}/` },
        {
          "@type": "ListItem",
          position: 2,
          name: "Our case studies",
          item: `${base}/case-studies`,
        },
      ],
    },
  };

  if (items?.length) {
    jsonLd.mainEntity = {
      "@type": "ItemList",
      itemListElement: items.map((cs, i) => ({
        "@type": "ListItem",
        position: i + 1,
        item: {
          "@type": "CreativeWork", // or "Article" if your case study is article-like
          name: cs.title,
          url: `${base}/case-studies/${cs.slug}`,
          author: { "@type": "Organization", name: "anfinity" },
        },
      })),
    };
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

interface Project {}

const CaseStudies = async () => {
  const projects: any[] = await getCaseStudies();

  return (
    <div>
      <JsonLd items={projects} />
      <ListingPageHero
        title="We take products and brands to the next level."
        description="From sleek business websites to complex web applications, we work closely with our clients to bring their visions to life. Our focus is on creating seamless digital experiences that not only look great but also perform flawlessly.
Explore our portfolio to see how we’ve helped businesses and brands build meaningful online experiences."
        textColor="#000"
      />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-[71px] md:gap-[29px] max-w-[1140px] ml-[25px] md:ml-[auto] mr-[25px] md:mr-[auto]">
        <div className="flex flex-col gap-[71px] md:gap-[141px]">
          {projects?.length &&
            projects
              .filter((_: Project, index: number) => index % 2 === 0)
              .map((project: Project, index: number) => (
                <StudyCard
                  key={index}
                  project={project}
                  isEven={index % 2 === 0}
                />
              ))}
        </div>
        <div className="flex flex-col gap-[71px] md:gap-[141px]">
          {projects?.length &&
            projects
              .filter((_: Project, index: number) => index % 2 !== 0)
              .map((project: Project, index: number) => (
                <StudyCard
                  key={index}
                  project={project}
                  isEven={index % 2 !== 0}
                />
              ))}
        </div>
      </div>
    </div>
  );
};

export default CaseStudies;
