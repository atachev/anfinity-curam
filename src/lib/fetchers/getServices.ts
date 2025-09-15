import { fetchAPI } from "@/lib/api";

interface ServicesResponse {
  data: any;
}

export async function getServices() {
  try {
    const res: ServicesResponse = await fetchAPI("services?populate=*");
    return res.data || [];
  } catch (error) {
    console.error("Failed to fetch services:", error);
    // Return empty array during build failures to prevent static generation errors
    return [];
  }
}

export async function getServicesBySlug(slug: string) {
  try {
    const res: ServicesResponse = await fetchAPI(
      `services?filters[slug][$eq]=${slug}&populate=*`
    );
    return res.data?.[0] || null;
  } catch (error) {
    console.error(`Failed to fetch service with slug ${slug}:`, error);
    return null;
  }
}
