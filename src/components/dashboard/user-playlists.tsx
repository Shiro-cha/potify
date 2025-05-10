import { Playlist } from "@/utils/types/Playlist";

type UserPlaylistsProps = {
  playlists: Playlist[] | null;
};

export default function UserPlaylists({ playlists }: UserPlaylistsProps) {
  return (
    <section>
      <h3 className="text-xl font-semibold text-white mb-4">Your Playlists</h3>
      <div className="grid grid-cols-3 gap-4">
        {playlists?.map((playlist) => (
          <div key={playlist.id} className="bg-gray-800 rounded-lg p-4 hover:bg-gray-700 transition">
            <img src={playlist.image} className="w-full h-32 object-cover rounded mb-3" />
            <h4 className="text-white font-medium mb-1">{playlist.name}</h4>
            <p className="text-sm text-gray-400">{playlist.tracks} tracks</p>
          </div>
        ))}
      </div>
    </section>
  );
}
