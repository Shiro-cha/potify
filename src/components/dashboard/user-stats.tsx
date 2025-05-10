interface UserStatsProps {
  minutesListened: number;
  likedSongs: number;
  following: number;
}

export default function UserStats({
  minutesListened,
  likedSongs,
  following
}: UserStatsProps) {
  return (
    <div className="grid grid-cols-3 gap-4 mb-8">
      <div className="bg-gray-800 p-4 rounded-lg">
        <p className="text-2xl font-bold text-white mb-1">{minutesListened}</p>
        <p className="text-sm text-gray-400">Minutes Listened</p>
      </div>
      <div className="bg-gray-800 p-4 rounded-lg">
        <p className="text-2xl font-bold text-white mb-1">{likedSongs}</p>
        <p className="text-sm text-gray-400">Liked Songs</p>
      </div>
      <div className="bg-gray-800 p-4 rounded-lg">
        <p className="text-2xl font-bold text-white mb-1">{following}</p>
        <p className="text-sm text-gray-400">Following</p>
      </div>
    </div>
  );
}
