// services/searchSpotify.ts
import { createSpotifyClient } from "@/utils/spotify";
import { SearchResult } from "@/utils/types/SearchResult";

export async function searchSpotify(accessToken: string, query: string): Promise<SearchResult[]> {
  const spotify = createSpotifyClient(accessToken);

  try {
    const { body } = await spotify.search(query, ['track', 'album', 'artist'], { limit: 6 });

    const tracks = body?.tracks?.items ?? [];
    const albums = body?.albums?.items ?? [];
    const artists = body?.artists?.items ?? [];

    const results: SearchResult[] = [
      ...tracks.map((item) => ({
        id: item.id ?? '',
        name: item.name ?? 'Unknown Track',
        type: 'track' as const,
        image: item.album?.images?.[0]?.url ?? ''
      })),
      ...albums.map((item) => ({
        id: item.id ?? '',
        name: item.name ?? 'Unknown Album',
        type: 'album' as const,
        image: item.images?.[0]?.url ?? ''
      })),
      ...artists.map((item) => ({
        id: item.id ?? '',
        name: item.name ?? 'Unknown Artist',
        type: 'artist' as const,
        image: item.images?.[0]?.url ?? ''
      })),
    ];

    return results.filter(item => item.id && item.name);
  } catch (err) {
    console.error("Spotify API error: searchSpotify", err);
    return [];
  }
}
