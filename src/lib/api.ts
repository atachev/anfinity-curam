// Promise<T>
export async function fetchAPI<T>(
  path: string,
  options?: RequestInit
): Promise<T> {
  const baseUrl = process.env.NEXT_PUBLIC_API_URL;

  if (!baseUrl) {
    console.warn(`NEXT_PUBLIC_API_URL not configured. Cannot fetch ${path}`);
    return { data: [] } as T;
  }

  try {
    const res = await fetch(`${baseUrl}${path}`, {
      ...options,
      headers: {
        "Content-Type": "application/json",
        ...options?.headers,
      },
      next: { revalidate: 60 },
    });

    if (!res.ok) {
      console.error(`API Error: ${res.status} ${res.statusText} for ${path}`);
      return { data: [] } as T;
    }

    const contentType = res.headers.get("content-type");
    if (!contentType || !contentType.includes("application/json")) {
      console.error(`API returned non-JSON response for ${path}:`, contentType);
      return { data: [] } as T;
    }

    return res.json();
  } catch (error) {
    console.error(`Error fetching ${path}:`, error);
    return { data: [] } as T;
  }
}
