// components/dashboard/music-player.tsx
import { FC, useCallback } from "react";

export type Track = {
  title: string;
  artist: string;
  album: string;
  albumImageUrl: string;
};

export interface MusicPlayerProps {
  track: Track | null;
  isPlaying: boolean;
  onPlay: () => void;
  onPause: () => void;
  onNext: () => void;
  onPrevious: () => void;
  onSeek: (position: number) => void;
}


export const MusicPlayer: FC<MusicPlayerProps> = ({
  track,
  isPlaying,
  onPlay,
  onPause,
  onNext,
  onPrevious,
  onSeek,
}) => {
  const togglePlay = useCallback(() => {
    isPlaying ? onPause() : onPlay();
  }, [isPlaying, onPlay, onPause]);

  if (!track) return null;

  return (
    <div className="
        fixed bottom-0 left-0 right-0
        bg-gray-800/80 backdrop-blur-sm
        border-t border-gray-700
        flex items-center
        px-4 py-2 space-x-4
        z-50
      ">
      {/* Album art */}
      <img
        src={track.albumImageUrl}
        alt={`${track.album} cover`}
        className="w-12 h-12 rounded-md flex-shrink-0"
      />

      {/* Track info */}
      <div className="flex-1 overflow-hidden">
        <p className="text-white font-semibold truncate">{track.title}</p>
        <p className="text-gray-400 text-sm truncate">
          {track.artist} — {track.album}
        </p>
      </div>

      {/* Controls */}
      <div className="flex items-center space-x-4">
        <button
          onClick={onPrevious}
          className="p-2 hover:bg-gray-700 rounded-full transition"
          aria-label="Previous"
        >
          ◀◀
        </button>
        <button
          onClick={togglePlay}
          className="p-2 hover:bg-gray-700 rounded-full transition"
          aria-label={isPlaying ? "Pause" : "Play"}
        >
          {isPlaying ? "❚❚" : "▶"}
        </button>
        <button
          onClick={onNext}
          className="p-2 hover:bg-gray-700 rounded-full transition"
          aria-label="Next"
        >
          ▶▶
        </button>
      </div>

      <input
        type="range"
        min={0}
        max={100}
        onChange={(e) => onSeek(Number(e.target.value))}
        className="w-32 h-1 accent-green-400 cursor-pointer"
      />
    </div>
  );
};
