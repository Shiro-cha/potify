export type SearchResult = {
  id: string;
  name: string;
  type: "track" | "album" | "artist";
  image: string;
};