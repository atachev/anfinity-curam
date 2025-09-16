import { fetchAPI } from "@/lib/api";

interface ClientsResponse {
  data: any;
}

export async function getClients() {
  try {
    const res: ClientsResponse = await fetchAPI("clients?populate=*");
    return res.data || [];
  } catch (error) {
    console.error("Failed to fetch clients:", error);
    return [];
  }
}
