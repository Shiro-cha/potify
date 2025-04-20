import { DASHBOARD, HOME, LOGIN } from "@/constants/routes";
import Link from "next/link";
import { NavButton } from "@/components/ui/nav-button";
import Image from "next/image";
import logo from "./favicon.ico";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 flex items-center justify-center p-6">
      <div className="max-w-md w-full bg-gray-800/50 backdrop-blur-lg rounded-2xl overflow-hidden shadow-2xl border border-gray-700/30">
        {/* Hero Section */}
        <div className="p-8 text-center">
          <div className="flex justify-center mb-6">
            <Image 
              src={logo}
              alt="Potify Logo"
              width={120}
              height={120}
              className="animate-float"
            />
          </div>
          
          <h1 className="text-4xl font-bold text-white mb-2">
            Welcome to <span className="text-green-400">Potify</span>
          </h1>
          <p className="text-gray-300 mb-8">
            Discover your perfect music experience
          </p>
        </div>

        {/* Action Buttons */}
        <div className="bg-gray-800/50 px-6 py-4 border-t border-gray-700/50">
          <div className="grid grid-cols-1 gap-4">
            <NavButton 
              href={LOGIN}
              className="w-full bg-green-500 hover:bg-green-600 text-white font-medium py-3 px-4 rounded-lg transition-all duration-300 transform hover:scale-[1.02] flex items-center justify-center gap-2"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
              </svg>
              Sign In with Spotify
            </NavButton>
            
            <NavButton 
              href={DASHBOARD}
              className="w-full bg-gray-700 hover:bg-gray-600 text-white font-medium py-3 px-4 rounded-lg transition-all duration-300 transform hover:scale-[1.02]"
            >
              Continue to Dashboard
            </NavButton>
            
            <div className="text-gray-400 hover:text-green-400 text-sm transition-colors">
              <Link href={HOME}>       
                  Back to home    
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}