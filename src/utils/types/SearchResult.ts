export type SearchResult = {
  id: string;
  name: string;
  type: "track" | "album" | "artist" | "video";
  image: string;
};