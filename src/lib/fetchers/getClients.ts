import { fetchAPI } from "@/lib/api";

interface ClientsResponse {
  data: any;
}

export async function getClients() {
  const res: ClientsResponse = await fetchAPI("clients?populate=*");

  return res.data;
}
