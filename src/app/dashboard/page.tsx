'use client'
import { useEffect, useState } from "react";
import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { HOME, LOGIN } from "@/constants/routes";

interface User {
  name?: string;
  email?: string;
  image?: string;
}

interface Playlist {
  id: string;
  name: string;
  image: string;
  tracks: number;
}

interface Track {
  id: string;
  title: string;
  artist: string;
  album: string;
  duration: string;
  image: string;
}

export default function Dashboard() {
  const [user, setUser] = useState<User | null>(null);
  const [playlists, setPlaylists] = useState<Playlist[]>([]);
  const [recentTracks, setRecentTracks] = useState<Track[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const { data: session, status } = useSession();
  const router = useRouter();

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

useEffect(() => {
  if (status === "authenticated") {
    setUser(session.user as User);
    
    setPlaylists([
      { 
        id: '1', 
        name: 'Liked Songs', 
        image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=300', 
        tracks: 543 
      },
      { 
        id: '2', 
        name: 'Summer Vibes', 
        image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=300', 
        tracks: 89 
      },
      { 
        id: '3', 
        name: 'Workout Mix', 
        image: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&w=300', 
        tracks: 120 
      },
    ]);

    setRecentTracks([
      { 
        id: '1', 
        title: 'As It Was', 
        artist: 'Harry Styles', 
        album: "Harry's House", 
        duration: '2:47', 
        image: 'https://images.unsplash.com/photo-1494232410401-ad00d5433cfa?auto=format&fit=crop&w=300' 
      },
      { 
        id: '2', 
        title: 'Heat Waves', 
        artist: 'Glass Animals', 
        album: 'Dreamland', 
        duration: '3:58', 
        image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=300' 
      },
      { 
        id: '3', 
        title: 'Starboy', 
        artist: 'The Weeknd', 
        album: 'Starboy', 
        duration: '3:50', 
        image: 'https://images.unsplash.com/photo-1462331940025-496dfbfc7564?auto=format&fit=crop&w=300' 
      },
    ]);
  }
}, [status, session]);

  useEffect(() => {
    if (status === "unauthenticated") router.push(LOGIN);
  }, [status, router]);

  const handleSignOut = async () => await signOut({ callbackUrl: LOGIN });

  if (status === "loading") return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center">
      <div className="animate-pulse space-y-4">
        <div className="h-24 w-24 rounded-full bg-gray-800"/>
        <div className="h-6 w-64 bg-gray-800 rounded-lg"/>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen flex bg-gray-900">
      <div className="w-64 fixed left-0 top-0 h-screen bg-gray-800/50 border-r border-gray-700 p-4">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-white">Potify</h1>
        </div>
        <nav className="space-y-2">
          <Link href={HOME} className="flex items-center gap-3 p-3 text-gray-300 hover:text-white hover:bg-gray-700/30 rounded-lg transition">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/>
            </svg>
            Home
          </Link>
          <Link href="/playlists" className="flex items-center gap-3 p-3 text-gray-300 hover:text-white hover:bg-gray-700/30 rounded-lg transition">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"/>
            </svg>
            Playlists
          </Link>
          <Link href="/history" className="flex items-center gap-3 p-3 text-gray-300 hover:text-white hover:bg-gray-700/30 rounded-lg transition">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
            </svg>
            History
          </Link>
        </nav>
        <div className="sticky bottom-0 mt-auto pt-4 border-t border-gray-700 ">
  <p className="text-xs text-gray-500 text-center">
    Made with ❤️ by Shiro-cha
  </p>
</div>
      </div>

      <div className="ml-64 flex-1 p-8">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-4">
            <h2 className="text-2xl font-semibold text-white">Dashboard</h2>
          </div>
          <div className="relative flex-1 max-w-xl mr-4">
            <input
              type="text"
              placeholder="Search songs, artists, playlists..."
              className="w-full px-4 py-2 bg-gray-800 rounded-lg text-white 
                       placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-500"
              value={searchQuery}
              onChange={(e) => handleSearch(e.target.value)}
            />
            
            {/* Autocomplete Suggestions */}
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
          </div>
          <div className="flex items-center gap-4">
            <button onClick={handleSignOut} className="flex items-center cursor-pointer gap-2 px-4 py-2 text-gray-300 hover:text-white transition">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"/>
              </svg>
              Sign Out
            </button>
            <img src={user?.image || "/default-user.png"} className="w-10 h-10 rounded-full border-2 border-green-400"/>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-4 mb-8">
          <div className="bg-gray-800 p-4 rounded-lg">
            <p className="text-2xl font-bold text-white mb-1">1,234</p>
            <p className="text-sm text-gray-400">Minutes Listened</p>
          </div>
          <div className="bg-gray-800 p-4 rounded-lg">
            <p className="text-2xl font-bold text-white mb-1">567</p>
            <p className="text-sm text-gray-400">Liked Songs</p>
          </div>
          <div className="bg-gray-800 p-4 rounded-lg">
            <p className="text-2xl font-bold text-white mb-1">89</p>
            <p className="text-sm text-gray-400">Following</p>
          </div>
        </div>

        <div className="space-y-8">
          <section>
            <h3 className="text-xl font-semibold text-white mb-4">Your Playlists</h3>
            <div className="grid grid-cols-3 gap-4">
              {playlists.map(playlist => (
                <div key={playlist.id} className="bg-gray-800 rounded-lg p-4 hover:bg-gray-700 transition">
                  <img src={playlist.image} className="w-full h-32 object-cover rounded mb-3"/>
                  <h4 className="text-white font-medium mb-1">{playlist.name}</h4>
                  <p className="text-sm text-gray-400">{playlist.tracks} tracks</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h3 className="text-xl font-semibold text-white mb-4">Recently Played</h3>
            <div className="space-y-2">
              {recentTracks.map(track => (
                <div key={track.id} className="flex items-center justify-between bg-gray-800 p-3 rounded-lg hover:bg-gray-700 transition">
                  <div className="flex items-center gap-4">
                    <img src={track.image} className="w-12 h-12 rounded"/>
                    <div>
                      <p className="text-white font-medium">{track.title}</p>
                      <p className="text-sm text-gray-400">{track.artist}</p>
                    </div>
                  </div>
                  <p className="text-gray-400 text-sm">{track.duration}</p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}