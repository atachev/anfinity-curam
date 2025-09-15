import type { Metadata } from "next";
import { notFound } from "next/navigation";
import SingleServiceHero from "@/components/heros/ServiceHero";
import Heading from "@/components/Heading";
import StudyCard from "@/components/studies/StudyCard";
import ContactFormSection from "@/components/homepage/ContactFormSection";
import ServiceSticky from "@/components/services/Sticky";
import { getServicesBySlug } from "@/lib/fetchers/getServices";
import Benefits from "@/components/services/Benefits";
import { getCaseStudies } from "@/lib/fetchers/getCaseStudies";

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const service = await getServicesBySlug(params.slug);

  const baseUrl = "https://anfinity.bg";
  const canonical = `${baseUrl}/services/${params.slug}`;

  return {
    title: `${service?.name} | anfinity`,
    description: service?.cardDescription,
    alternates: { canonical },
    openGraph: {
      type: "website",
      url: canonical,
      title: `${service?.name} | anfinity`,
      description: service?.cardDescription,
      siteName: "anfinity",
      images: [
        {
          // url: `${baseUrl}/og/services-${params.slug}.jpg`, // generate or use fallback
          url: "https://anfinity.bg/og-image.jpg",
          width: 1200,
          height: 630,
          alt: service?.name,
        },
      ],
    },
    robots: { index: true, follow: true },
  };
}

function JsonLd({ service, slug }: { service: any; slug: string }) {
  const canonical = `https://anfinity.bg/services/${slug}`;
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.name,
    description: service.cardDescription,
    provider: {
      "@type": "Organization",
      name: "anfinity",
      url: "https://anfinity.bg",
    },
    url: canonical,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

export default async function ServicePage({
  params,
}: {
  params: { slug: string };
}) {
  const service = await getServicesBySlug(params.slug);
  const projects: any[] = await getCaseStudies();
  if (!service) {
    notFound();
  }

  return (
    <div>
      <JsonLd service={service} slug={params.slug} />
      <SingleServiceHero
        title={service.name}
        description={service.pageDescription}
        icon={service.icon}
      />
      <Benefits benefits={service.benefits} />
      <ServiceSticky process={service.process} />
      <div className="flex flex-col max-w-[1140px] mt-[149px] pb-[126px] md:pb-[141px] ml-[25px] md:ml-[auto] mr-[25px] md:mr-[auto]">
        <Heading
          as="h2"
          className="font-[700] text-[50px] leading-[50px] tracking-[-0.01em]"
        >
          Case studies
        </Heading>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[71px] md:gap-[29px] max-w-[1140px] mx-auto mt-[104px] ml-[0] mr-[0]">
          <div className="flex flex-col gap-[71px] md:gap-[141px]">
            {projects?.length &&
              projects
                .filter((_, index) => index % 2 === 0)
                .map((project, index) => (
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
                .filter((_, index) => index % 2 !== 0)
                .map((project, index) => (
                  <StudyCard
                    key={index}
                    project={project}
                    isEven={index % 2 === 0}
                  />
                ))}
          </div>
        </div>
      </div>
      <div
        className="bg-[#000] rounded-[40px]"
        style={{ zIndex: 9999, position: "relative" }}
      >
        <ContactFormSection />
      </div>
    </div>
  );
}
