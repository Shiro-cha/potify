// lib/spotify.ts
import SpotifyWebApi from "spotify-web-api-node";


export function createSpotifyClient(accessToken: string) {
  const spotifyApi = new SpotifyWebApi();
  spotifyApi.setAccessToken(accessToken);
  return spotifyApi;
}


