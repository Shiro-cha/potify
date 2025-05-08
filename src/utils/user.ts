import { createSpotifyClient } from "@/utils/spotify";

export async function getUserPlaylists(accessToken: string) {

  const spotifyApi = createSpotifyClient(accessToken);
  const data = await spotifyApi.getUserPlaylists();
  return data.body.items; 
}
