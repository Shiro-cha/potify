import { useState } from "react";
import { useSession } from "next-auth/react";
import { SearchResult } from "@/utils/types/SearchResult";
import { searchSpotify, searchSpotifyAndYouTube } from "../../../services/api/search.service";

export default function InputSearch() {
  const { data: session, status } = useSession();
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState<SearchResult[]>([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = async (query: string) => {
    setSearchQuery(query);

    if (
      status === "authenticated" &&
      session?.accessToken &&
      query.trim().length > 0
    ) {
      try {
        setLoading(true);
        const results = await searchSpotifyAndYouTube(session.accessToken, query);
        setSuggestions(results);
      } catch (err) {
        console.error("Search error:", err);
        setSuggestions([]);
      } finally {
        setLoading(false);
      }
    } else {
      setSuggestions([]);
    }
  };

  return (
    <div className="relative">
      <input
        type="text"
        placeholder="Search songs, artists, albums..."
        className="w-full px-4 py-2 bg-gray-800 rounded-lg text-white 
                   placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-500"
        value={searchQuery}
        onChange={(e) => handleSearch(e.target.value)}
      />

      {searchQuery.length > 0 && (
        <div className="absolute z-10 w-full mt-2 bg-gray-900 rounded-lg shadow-lg border border-gray-700 max-h-80 overflow-y-auto">
          {loading ? (
            <div className="px-4 py-3 text-sm text-gray-400 italic">
              Searching...
            </div>
          ) : suggestions.length === 0 ? (
            <div className="px-4 py-3 text-sm text-gray-500 italic">
              No results found
            </div>
          ) : (
            suggestions.map((item, index) => (
              <div
                key={item.id + index}
                className="flex items-center gap-3 px-4 py-2 hover:bg-gray-700 cursor-pointer text-white text-sm border-b border-gray-800 last:border-b-0"
                onClick={() => {
                  setSearchQuery(item.name);
                  setSuggestions([]);
                }}
              >
                <img
                  src={item.image || "/placeholder.png"}
                  alt={item.name}
                  className="w-8 h-8 rounded object-cover"
                />
                <div className="flex flex-col">
                  <span className="font-medium">{item.name}</span>
                  <span className="text-xs text-gray-400 capitalize">
                    {item.type}
                  </span>
                </div>
              </div>
            ))
          )}
        </div>
      )}
    </div>
  );
}
