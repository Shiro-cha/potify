import { Track } from "@/utils/types/Track";
import { useEffect, useState } from "react";
import { Play, Pause } from "lucide-react"

type UserTrackProps = {
  tracks?: Track[];
};

export default function UserTrack({ tracks }: UserTrackProps) {
  const [recentTracks, setRecentTracks] = useState<Track[]>([]);
  const [showAll, setShowAll] = useState(false);
  const [currentlyPlayingId, setCurrentlyPlayingId] = useState<string | null>(null);

  useEffect(() => {
    if (tracks && tracks.length > 0) {
      setRecentTracks(tracks);
    }
  }, [tracks]);

  const toggleShowAll = () => setShowAll(!showAll);
  const displayedTracks = showAll ? recentTracks : recentTracks.slice(0, 3);

  const handlePlayPause = (trackId: string) => {
    setCurrentlyPlayingId(prev =>
      prev === trackId ? null : trackId
    );
  };

  return (
    <section className="max-w-4xl mx-auto px-4 pb-36">
      <h3 className="text-xl font-semibold text-white mb-4">Recently Played</h3>
      <div className="space-y-3">
        {displayedTracks.map(track => {
          const isPlaying = track.id === currentlyPlayingId;
          return (
            <div
              key={track.id}
              className="flex items-center justify-between bg-gray-800/60 backdrop-blur-md p-4 rounded-xl hover:bg-gray-700/70 transition"
            >
              <div className="flex items-center gap-4">
          
                <button
                  onClick={() => handlePlayPause(track.id)}
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 transition duration-300"
                >
                  {isPlaying ? (
                    <Pause className="text-white w-5 h-5" />
                  ) : (
                    <Play className="text-white w-5 h-5" />
                  )}
                </button>

               
                <img
                  src={track.image}
                  className="w-12 h-12 rounded-md object-cover"
                  alt={track.title}
                />

       
                <div>
                  <p className="text-white font-medium">{track.title}</p>
                  <p className="text-sm text-gray-400">{track.artist}</p>
                </div>
              </div>

            
              <p className="text-gray-400 text-sm">{track.duration}</p>
            </div>
          );
        })}
      </div>


      {recentTracks.length > 3 && (
        <div className="text-center mt-6">
          <button
            onClick={toggleShowAll}
            className="px-4 py-2 bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-full hover:bg-white/20 transition"
          >
            {showAll ? "See Less" : "See More"}
          </button>
        </div>
      )}
    </section>
  );
}
