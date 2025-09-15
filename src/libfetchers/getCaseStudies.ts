export async function getCaseStudyBySlug(slug: string) {
  try {
    const url = `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/case-studies?filters[slug][$eq]=${slug}&populate=*&populate[gallery][populate][assets][populate]=images`;

    const response = await fetch(url, {
      next: { revalidate: 3600 },
    });

    if (!response.ok) {
      console.error("Failed to fetch case study:", {
        status: response.status,
        statusText: response.statusText,
        url: url,
      });
      throw new Error(
        `Failed to fetch case study: ${response.status} ${response.statusText}`
      );
    }

    const data = await response.json();

    if (!data.data || data.data.length === 0) {
      console.error("No case study found for slug:", slug);
      return null;
    }

    return data.data[0];
  } catch (error) {
    console.error("Error in getCaseStudyBySlug:", error);
    throw error;
  }
}
