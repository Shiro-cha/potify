import { SpotifyApi } from '@spotify/web-api-ts-sdk';


export class SpotifyService {
  private sdk: SpotifyApi;

  constructor(accessToken: string) {
    this.sdk = SpotifyApi.withAccessToken(
      process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_ID!,
      { token: accessToken }
    );
  }

  // User Data
  async getCurrentUser() {
    return this.sdk.currentUser.profile();
  }

  async getUserPlaylists(limit = 20) {
    return this.sdk.currentUser.playlists.playlists(limit);
  }

  // Music Data
  async searchTracks(query: string, limit = 10) {
    return this.sdk.search(query, ['track'], undefined, limit);
  }

  async getTrackDetails(trackId: string) {
    return this.sdk.tracks.get(trackId);
  }
}