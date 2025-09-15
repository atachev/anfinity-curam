import { fetchAPI } from "@/lib/api";

interface CaseStudyResponse {
  data: any;
}

export async function getCaseStudies() {
  try {
    const res: CaseStudyResponse = await fetchAPI("case-studies?populate=*");
    return res.data || [];
  } catch (error) {
    console.error("Failed to fetch case studies:", error);
    return [];
  }
}

export async function getCaseStudyBySlug(slug: string) {
  try {
    const res: CaseStudyResponse = await fetchAPI(
      `case-studies?filters[slug][$eq]=${slug}&populate[features][populate]=image&populate[technologies][populate]=icon&populate=headlineImages&populate[client][populate]=*&populate[industry][populate]=*&populate[case_study_categories][populate]=*&populate[tags][populate]=*&populate[steps][populate]=*&populate[gallery][populate][assets][populate]=images`
    );
    return res.data?.[0] || null;
  } catch (error) {
    console.error(`Failed to fetch case study with slug ${slug}:`, error);
    return null;
  }
}

export async function getMoreCaseStudies(slug: string) {
  try {
    const res: CaseStudyResponse = await fetchAPI(
      `case-studies?filters[slug][$ne]=${slug}&populate=*&pagination[limit]=4`
    );
    return res.data || [];
  } catch (error) {
    console.error("Failed to fetch case studies:", error);
    return [];
  }
}
