import { LOGIN } from "@/constants/routes";
import { signOut } from "next-auth/react";

export default function SignOut(){

    const handleSignOut = async () => await signOut({ callbackUrl: LOGIN });
    return(
        <button onClick={handleSignOut} className="flex items-center cursor-pointer gap-2 px-4 py-2 text-gray-300 hover:text-white transition">
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"/>
        </svg>
        Sign Out
      </button>
    )
}