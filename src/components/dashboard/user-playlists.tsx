import { Playlist } from "@/utils/types/Playlist";
import { useEffect, useState } from "react";

export default function UserPlaylists(){
  const [playlists, setPlaylists] = useState<Playlist[]>([]);

  useEffect(function(){
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
  },[])
  return(
    <>
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
    </>
  )
}