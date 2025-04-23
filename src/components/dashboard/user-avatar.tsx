import { User } from "@/utils/types/User";

type Props = {
  user: User | null;
};

export default function UserAvatar({ user }: Props) {
  if (!user) return null;
  const fallbackAvatar = `https://ui-avatars.com/api/?name=${encodeURIComponent(
    user.name || "User"
  )}&background=random&rounded=true&size=128`;

  return (
    <div className="relative group inline-block mx-4">
      <img
        src={user.image || fallbackAvatar}
        className="w-10 h-10 rounded-full border-2 border-green-400 cursor-pointer"
        alt={user.name || "User avatar"}
      />

      <div
        className="absolute top-full mt-2 hidden group-hover:flex flex-col items-start 
                   rounded-xl bg-white/70 backdrop-blur-sm text-black px-4 py-2 text-sm shadow-lg z-50 
                   max-w-[calc(100vw-2rem)] w-max break-words whitespace-normal overflow-hidden
                   left-1/2 -translate-x-1/2 sm:left-auto sm:right-0 sm:translate-x-0">
        <span className="font-semibold">{user.name}</span>
        <span className="text-xs text-gray-600">{user.email}</span>
      </div>
    </div>
  );
}
