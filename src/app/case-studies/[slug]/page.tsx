import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import InnerPageHero from "@/components/heros/InnerPageHero";
import TextSection from "@/components/studies/TextSection";
import ContactFormSection from "@/components/homepage/ContactFormSection";
import Testimonials from "@/components/homepage/Testimonials";
import {
  getMoreCaseStudies,
  getCaseStudyBySlug,
} from "@/lib/fetchers/getCaseStudies";
import Stack from "@/components/studies/Stack";
import StudiesWrapper from "@/components/studies/StudiesWrapper";
import ProcessSection from "@/components/sections/ProcessSection";
import FeaturesWrapper from "@/components/studies/FeaturesWrapper";
import StatisticsWrapper from "@/components/studies/StatisticsWrapper";
import { buildImageUrl } from "@/lib/utils";
import Gallery from "@/components/studies/Gallery";
import HeadlineMedia from "@/components/studies/HeadlineMedia";

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const cs = await getCaseStudyBySlug(params.slug);
  if (!cs)
    return {
      title: "Case Study not found | anfinity",
      robots: { index: false, follow: false },
    };

  const base = "https://anfinity.bg";
  const canonical = `${base}/case-studies/${params.slug}`;

  return {
    metadataBase: new URL(base),
    title: `${cs.title} — Case Study | anfinity`,
    description: cs.description,
    alternates: { canonical },
    openGraph: {
      type: "article",
      url: canonical,
      title: `${cs.title} — Case Study | anfinity`,
      description: cs.description,
      siteName: "anfinity",
      images: [
        {
          url: cs.headlineImages[0].url || `https://anfinity.bg/og-image.jpg`,
          // url: "https://anfinity.bg/og-image.jpg",
          width: 1200,
          height: 630,
          alt: cs.title,
        },
      ],
      locale: "en_US",
    },
    robots: { index: true, follow: true },
  };
}

export default async function CaseStudyPage({
  params,
}: {
  params: { slug: string };
}) {
  const study = await getCaseStudyBySlug(params.slug);
  const projects = await getMoreCaseStudies(params.slug);
  if (!study) {
    notFound();
  }

  return (
    <div>
      <InnerPageHero
        title={study.title}
        client={study.client?.name}
        website={study.client?.website}
        industry={study.industry}
        services={study.case_study_categories}
        tags={study.tags}
        description={study.description}
        mainColor={study?.brand.primaryColor}
      />
      <HeadlineMedia
        headlineImages={study?.headlineImages || []}
        primaryColor={study?.brand.primaryColor}
      />
      <div className="pt-[114px] md:pt-[151px]">
        <TextSection title="Challenge" content={study.challenge} />
      </div>
      <div className="pt-[108px] md:pt-[98px]">
        <TextSection title="Solution" content={study.solution} />
      </div>
      {study.metrics && <StatisticsWrapper metrics={study.metrics} />}
      {study?.gallery && (
        <div className="max-w-[1140px] ml-[25px] md:ml-[auto] mr-[25px] md:mr-[auto] mt-[156px] md:mt-[121px]">
          <Gallery gallery={study.gallery} />
        </div>
      )}
      <FeaturesWrapper
        features={study.features}
        primaryColor={study?.brand?.primaryColor}
        secondaryColor={study?.brand?.secondaryColor}
      />
      <ProcessSection
        steps={study?.steps}
        primaryColor={study?.brand?.process?.primary}
        secondaryColor={study?.brand?.process?.secondary}
      />
      <Stack technologies={study.technologies} />
      {study?.client?.testimonials && (
        <div className="bg-[#F8F8F8] rounded-[35px] md:rounded-[40px]">
          <Testimonials clients={study.client} />
        </div>
      )}
      <StudiesWrapper title="More case studies" studies={projects} />
      <div
        className="bg-[#000] rounded-[35px] md:rounded-[40px]"
        style={{ zIndex: 101, position: "relative" }}
      >
        <ContactFormSection />
      </div>
    </div>
  );
}
