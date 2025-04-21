import { ENDPOINT } from "@/constants/spotify"


type QueryParams = Record<string, string | number | boolean | undefined>;

export async function fetcher<T>(input: string, init?: RequestInit): Promise<T> {

    const res = await fetch(input, {
      ...init,
      headers: {
        'Content-Type': 'application/json',
        ...(init?.headers || {})
      }
    })
  
    if (!res.ok) {
      throw new Error(`Error: ${res.statusText}`)
    }
  
    return res.json()
  }
export function joinEndpoint(base: string, path: string): string {
  return `${base.replace(/\/+$/, '')}/${path.replace(/^\/+/, '')}`;
}


export function buildUrl(
  base: string,
  path: string,
  params?: QueryParams
): string {
  const url = new URL(joinEndpoint(base, path));

  if (params) {
    Object.entries(params).forEach(([key, value]) => {
      if (value !== undefined) url.searchParams.append(key, String(value));
    });
  }

  return url.toString();
}

  