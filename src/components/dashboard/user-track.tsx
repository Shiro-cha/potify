import { Track } from "@/utils/types/Track";
import { useEffect, useState } from "react";

export default function UserTrack(){
    const [recentTracks, setRecentTracks] = useState<Track[]>([]);

    useEffect(function(){
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
      },[])
    return(
      <>
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
      </>
    )
}