// services/soundcloud.service.ts
import axios from 'axios';

export class SoundCloudService {
  private readonly API_URL = 'https://api.soundcloud.com';
  private readonly CLIENT_ID = process.env.NEXT_PUBLIC_SOUNDCLOUD_CLIENT_ID;

  async searchTracks(query: string, limit = 10) {
    const response = await axios.get(`${this.API_URL}/tracks`, {
      params: {
        q: query,
        client_id: this.CLIENT_ID,
        limit,
        license: 'cc-by-sa' // Filter for free-to-use tracks
      }
    });
    return response.data;
  }

  async resolveUrl(trackUrl: string) {
    const response = await axios.get(`${this.API_URL}/resolve`, {
      params: {
        url: trackUrl,
        client_id: this.CLIENT_ID
      }
    });
    return response.data;
  }

  async getStreamUrl(trackId: string) {
    const response = await axios.get(`${this.API_URL}/tracks/${trackId}/stream`, {
      params: {
        client_id: this.CLIENT_ID
      }
    });
    return response.data.url;
  }
}