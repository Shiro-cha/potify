import { createSpotifyClient } from "@/utils/spotify";
import { User } from "@/utils/types/User";


export async function getUserPlaylists(accessToken: string) {
    const spotify = createSpotifyClient(accessToken);
  
    try {
      const data = await spotify.getUserPlaylists();
      const formattedPlaylists = data.body.items.map((playlist) => ({
        id: playlist.id,
        name: playlist.name,
        image: playlist.images?.[0]?.url ?? "https://via.placeholder.com/300", // fallback si pas d'image
        tracks: playlist.tracks.total,
      }));
  
      return formattedPlaylists;
    } catch (err) {
      console.error("Spotify API error: getUserPlaylists", err);
      return [];
    }
  }
  
  export async function getUserProfile(accessToken: string): Promise<User | null> {
    const spotify = createSpotifyClient(accessToken);
  
    try {
      const { body } = await spotify.getMe();
  
      const user: User = {
        image: body.images?.[0]?.url ?? "", // fallback string if no image
        name: body.display_name ?? "Unknown",
        email: body.email ?? "",
      };
  
      return user;
    } catch (err) {
      console.error("Spotify API error: getMe", err);
      return null;
    }
  }


export async function getRecentlyPlayed(accessToken: string) {
    const spotify = createSpotifyClient(accessToken);
  
    try {
      const { body } = await spotify.getMyRecentlyPlayedTracks({ limit: 20 });
  
      const formatted = body.items.map((item, index) => {
        const track = item.track;
        const durationMs = track.duration_ms;
  
        // Convert milliseconds to mm:ss format
        const minutes = Math.floor(durationMs / 60000);
        const seconds = Math.floor((durationMs % 60000) / 1000)
          .toString()
          .padStart(2, "0");
  
        return {
          id: track.id || `${index + 1}`,
          title: track.name,
          artist: track.artists[0]?.name || "Unknown Artist",
          album: track.album.name,
          duration: `${minutes}:${seconds}`,
          image: track.album.images[0]?.url || "",
        };
      });
  
      return formatted;
    } catch (err) {
      console.error("Spotify API error: getRecentlyPlayed", err);
      return null;
    }
  }
  


export async function getLikedSongs(accessToken: string) {
  const spotify = createSpotifyClient(accessToken);

  try {
    const { body } = await spotify.getMySavedTracks({ limit: 50 });
    return body.items.length;
  } catch (err) {
    console.error("Spotify API error: getLikedSongs", err);
    return  0 ;
  }
}


export async function getFollowingArtists(accessToken: string) {
  const spotify = createSpotifyClient(accessToken);

  try {
    const { body } = await spotify.getFollowedArtists({ limit: 50 });
    return body.artists.items.length;
  } catch (err) {
    console.error("Spotify API error: getFollowingArtists", err);
    return 0;
  }
}


export async function getEstimatedMinutesListened(accessToken: string) {
  const spotify = createSpotifyClient(accessToken);

  try {
    const { body } = await spotify.getMyTopTracks({ time_range: "short_term", limit: 50 });
    const totalMs = body.items.reduce((acc, track) => acc + track.duration_ms, 0);
    const totalMinutes = Math.round(totalMs / 1000 / 60);
    return totalMinutes;
  } catch (err) {
    console.error("Spotify API error: getEstimatedMinutesListened", err);
    return null;
  }
}
