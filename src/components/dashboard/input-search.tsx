import { useState } from "react";

export default function InputSearch(){
    const [searchQuery, setSearchQuery] = useState("");
    const [suggestions, setSuggestions] = useState<string[]>([]);

    const mockSuggestions = [
        "As It Was - Harry Styles",
        "Heat Waves - Glass Animals",
        "Starboy - The Weeknd",
        "Summer Vibes Playlist",
        "Workout Mix Playlist"
      ];

    const handleSearch = (query: string) => {
        setSearchQuery(query);
        if (query.length > 0) {
          setSuggestions(mockSuggestions.filter(item =>
            item.toLowerCase().includes(query.toLowerCase())
          ));
        } else {
          setSuggestions([]);
        }
      };
    return(
      <>
        <input
              type="text"
              placeholder="Search songs, artists, playlists..."
              className="w-full px-4 py-2 bg-gray-800 rounded-lg text-white 
                       placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-500"
              value={searchQuery}
              onChange={(e) => handleSearch(e.target.value)}
            />
            
            {suggestions.length > 0 && (
              <div className="absolute z-10 w-full mt-2 bg-gray-800 rounded-lg shadow-lg">
                {suggestions.map((suggestion, index) => (
                  <div
                    key={index}
                    className="px-4 py-2 hover:bg-gray-700 cursor-pointer text-white text-sm 
                             border-b border-gray-700 last:border-b-0"
                    onClick={() => {
                      setSearchQuery(suggestion);
                      setSuggestions([]);
                    }}
                  >
                    {suggestion}
                  </div>
                ))}
              </div>
            )}
      </>
    )
}