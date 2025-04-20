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

export default function Dashboard() {
  const [user, setUser] = useState<User | null>(null);
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push(LOGIN);
    } else if (session?.user) {
      setUser(session.user as User);
    }
  }, [status, session, router]);

  const handleSignOut = async () => {
    await signOut({ callbackUrl: LOGIN });
  };

  if (status === "loading") {
    return (
      <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 flex flex-col items-center justify-center p-4">
        <div className="animate-pulse space-y-4">
          <div className="h-24 w-24 rounded-full bg-gray-700/50"></div>
          <div className="h-6 w-64 bg-gray-700/50 rounded-lg"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 flex flex-col items-center justify-center p-4">
      <div className="bg-gray-800/50 backdrop-blur-lg p-8 rounded-2xl shadow-2xl w-full max-w-2xl text-center border border-white/10">
        <h1 className="text-4xl font-bold text-white mb-8">
          Welcome to <span className="text-green-400">Potify</span>
        </h1>
        
        {user && (
          <div className="flex flex-col items-center space-y-6">
            <div className="relative group">
              <img 
                src={user.image || "/default-user.png"} 
                alt="User profile"
                className="w-32 h-32 rounded-full border-4 border-green-400/50 hover:border-green-400 transition-all duration-300 cursor-pointer"
              />
              <div className="absolute inset-0 bg-green-400/10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>

            <div className="space-y-2">
              <h2 className="text-2xl font-semibold text-white">{user.name}</h2>
              <p className="text-gray-400 font-mono">{user.email}</p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 w-full max-w-sm">
              <button
                onClick={handleSignOut}
                className="flex-1 flex items-center justify-center gap-2 py-3 px-6 rounded-xl bg-red-500/20 hover:bg-red-500/30 border border-red-400/30 hover:border-red-400/50 backdrop-blur-sm transition-all duration-300 text-red-100 hover:text-white"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H3" />
                </svg>
                <span className="text-sm font-semibold">Disconnect</span>
              </button>

              <Link
                href={HOME}
                className="flex-1 flex items-center justify-center gap-2 py-3 px-6 rounded-xl bg-gray-700/20 hover:bg-gray-700/30 border border-gray-600/30 hover:border-gray-600/50 backdrop-blur-sm transition-all duration-300 text-gray-300 hover:text-white"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                </svg>
                <span className="text-sm font-semibold">Home</span>
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}