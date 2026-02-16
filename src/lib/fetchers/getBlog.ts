import { fetchAPI } from "@/lib/api";

interface BlogCategoriesResponse {
  data: any;
}

export async function getBlogCategories() {
  try {
    const res: BlogCategoriesResponse = await fetchAPI("categories?populate=*");
    return res.data || [];
  } catch (error) {
    console.error("Failed to fetch blog categories:", error);
    return [];
  }
}

export async function getBlogPosts() {
  try {
    const res: any = await fetchAPI("blogs?populate=*");
    return res.data || [];
  } catch (error) {
    console.error("Failed to fetch blog posts:", error);
    return [];
  }
}

export async function getBlogPostBySlug(slug: string) {
  try {
    const res: any = await fetchAPI(
      `blogs?filters[slug][$eq]=${slug}&populate=*`,
    );
    return res.data || [];
  } catch (error) {
    console.error("Failed to fetch blog post by slug:", error);
    return null;
  }
}

export async function getRelatedBlogPosts(
  categoryName: string,
  excludeDocumentId: string | number,
) {
  if (!categoryName || excludeDocumentId == null) return [];
  try {
    // const res: any = await fetchAPI(
    //   `blogs?filters[categories][name][$eq]=${categoryName}&filters[documentId][$ne]=${excludeDocumentId}&pagination[limit]=3&populate=*`,
    // );
    const res: any = await fetchAPI(
      `blogs?filters[categories][name][$eq]=${categoryName}&pagination[limit]=3&populate=*`,
    );
    return res?.data ?? [];
  } catch (error) {
    console.error("Failed to fetch blog post by slug:", error);
    return null;
  }
}
