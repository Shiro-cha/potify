import { createSpotifyClient } from "@/utils/spotify";
import { searchYouTube } from "@/utils/youtube";
import { SearchResult } from "@/utils/types/SearchResult";

// Spotify Search Function
export async function searchSpotify(accessToken: string, query: string): Promise<SearchResult[]> {
  const spotify = createSpotifyClient(accessToken);

  try {
    const { body } = await spotify.search(query, ['track', 'album', 'artist'], { limit: 6 });

    const tracks = body?.tracks?.items ?? [];
    const albums = body?.albums?.items ?? [];
    const artists = body?.artists?.items ?? [];

    const spotifyResults: SearchResult[] = [
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

    return spotifyResults.filter(item => item.id && item.name);
  } catch (err) {
    console.error("Spotify API error: searchSpotify", err);
    return [];
  }
}

// YouTube Search Function
export async function searchYouTubeVideos(query: string): Promise<SearchResult[]> {
  try {
    const youtubeResults = await searchYouTube(query);

    const formattedResults: SearchResult[] = youtubeResults.map((video: any) => ({
      id: video.id,
      name: video.name ?? 'Unknown Video',
      type: 'video' as const,
      image: video.image ?? '',
    }));

    return formattedResults;
  } catch (err) {
    console.error("YouTube API error: searchYouTubeVideos", err);
    return [];
  }
}

// Combined Search Function for Spotify and YouTube
export async function searchSpotifyAndYouTube(accessToken: string, query: string): Promise<SearchResult[]> {
  try {
    // Get Spotify results
    const spotifyResults = await searchSpotify(accessToken, query);

    // Get YouTube results
    const youtubeResults = await searchYouTubeVideos(query);

    // Combine results and return
    const allResults: SearchResult[] = [...spotifyResults, ...youtubeResults];

    return allResults.filter(item => item.id && item.name);
  } catch (err) {
    console.error("Error in combined search (Spotify and YouTube):", err);
    return [];
  }
}
