import { User } from "@/types/User";

type Props = {
  user: User | null;
};

export default function UserAvatar({ user }: Props) {
  if (!user) return null;

  return (
    <div className="relative group inline-block mx-4">
      <img
        src={user.image || "/default-user.png"}
        className="w-10 h-10 rounded-full border-2 border-green-400 cursor-pointer"
        alt={user.name || "User avatar"}
      />

      <div className="absolute  left-1/2 top-full mt-2 mr-2 -translate-x-1/2 hidden group-hover:flex flex-col items-center 
                      rounded-xl bg-white/70 backdrop-blur-sm text-black px-2 py-2 text-sm shadow-lg z-50 min-w-max">
        <span className="font-semibold">{user.name}</span>
        <span className="text-xs text-gray-600">{user.email}</span>
      </div>
    </div>
  );
}
