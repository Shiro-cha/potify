
export async function fetcher<T>(input: RequestInfo, init?: RequestInit): Promise<T> {
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
  