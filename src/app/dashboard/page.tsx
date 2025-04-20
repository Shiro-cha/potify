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
      <div className="flex items-center justify-center h-screen">
        <div className="animate-pulse">
          <div className="h-20 w-20 rounded-full bg-gray-700 mb-4"></div>
          <div className="h-8 w-60 bg-gray-700 rounded"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 flex flex-col items-center justify-center p-4">
      <div className="bg-gray-800/70 p-8 rounded-xl shadow-2xl w-full max-w-2xl text-center">
        <h1 className="text-4xl font-bold text-white mb-6">
          Welcome to <span className="text-green-500">Potify</span> Dashboard
        </h1>
        
        {user && (
          <div className="flex flex-col items-center mt-6">
            <img 
              src={user.image || "/default-user.png"} 
              alt="User profile"
              className="w-24 h-24 rounded-full mb-4 border-2 border-green-500 animate-fade-in"
            />
            <h2 className="text-2xl font-semibold text-white">{user.name}</h2>
            <p className="text-gray-300">{user.email}</p>
            
            <div className="flex gap-4 mt-6">
            <button
  onClick={handleSignOut}
  className="flex items-center gap-2 py-2 px-4 rounded-sm shadow-sm bg-gray-600 hover:bg-gray-700 text-white transition-colors"
>
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H3" />
  </svg>
  Disconnect Session
</button>

<Link 
  href={HOME} 
  className="flex items-center gap-2 py-2 px-4 rounded-sm shadow-sm bg-gray-700 hover:bg-gray-600 text-white transition-colors"
>
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
  </svg>
  Back to home
</Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}