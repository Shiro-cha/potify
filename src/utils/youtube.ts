
import axios from "axios";
import { SearchResult } from "./types/SearchResult";

interface YouTubeAPIResponse {
  items: {
    id: { videoId: string };
    snippet: {
      title: string;
      thumbnails: { default: { url: string } };
    };
  }[];
}


const YOUTUBE_API_KEY = process.env.NEXT_PUBLIC_YOUTUBE_API_KEY;

if (!YOUTUBE_API_KEY) {
  throw new Error("Missing NEXT_PUBLIC_YOUTUBE_API_KEY in environment variables");
}

export async function searchYouTube(query: string): Promise<SearchResult[]> {
  const url = "https://www.googleapis.com/youtube/v3/search";

  try {
    const response = await axios.get<YouTubeAPIResponse>(url, {
      params: {
        part: "snippet",
        q: query,
        type: "video",
        maxResults: 6,
        key: YOUTUBE_API_KEY,
      },
    });

    return response.data.items.map((item) => ({
      id: item.id.videoId,
      name: item.snippet.title,
      type: "video",
      image: item.snippet.thumbnails?.default?.url ?? "",
    }));
  } catch (error) {
    console.error("YouTube API error:", error);
    throw new Error("Failed to fetch data from YouTube API");
  }
}
