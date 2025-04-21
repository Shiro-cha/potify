import { HOME } from "@/constants/routes"
import Link from "next/link"
export default function Navigation(){
    return(
      <nav className="space-y-2">
          <Link href={HOME} className="flex items-center gap-3 p-3 text-gray-300 hover:text-white hover:bg-gray-700/30 rounded-lg transition">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/>
            </svg>
            Home
          </Link>
          <Link href="/playlists" className="flex items-center gap-3 p-3 text-gray-300 hover:text-white hover:bg-gray-700/30 rounded-lg transition">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"/>
            </svg>
            Playlists
          </Link>
          <Link href="/history" className="flex items-center gap-3 p-3 text-gray-300 hover:text-white hover:bg-gray-700/30 rounded-lg transition">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
            </svg>
            History
          </Link>
        </nav>
    )
}