"use client";
import { HOME } from "@/constants/routes";
import { signIn } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";

export default function LoginPage() {
  const handleLogin = () => {
    signIn("spotify", {
      callbackUrl: "/dashboard",
      redirect: false,
    }).then(() => {
    
    });
  };

  useEffect(() => {
    const checkAuth = setInterval(() => {
      fetch("/api/auth/session")
        .then(res => res.json())
        .then(data => {
          if (data?.user) {
            window.location.href = "/dashboard";
            clearInterval(checkAuth);
          }
        });
    }, 1000);

    return () => clearInterval(checkAuth);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 flex items-center justify-center p-6">
      <div className="bg-gray-800/50 p-8 rounded-xl shadow-2xl w-full max-w-md text-center">
        <div className="mb-8 flex justify-center">
        <Image 
          src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_White.png" 
          alt="Spotify Logo"
          width={120}
          height={120}
          className="animate-pulse"
          priority // Important for above-the-fold images
          unoptimized={true} // Since we're using an external URL
        />
        </div>
        
        <h1 className="text-3xl font-bold text-white mb-6">
          Connect Your Spotify
        </h1>
        
        <p className="text-gray-300 mb-8">
          Unlock personalized music experiences by connecting your Spotify account
        </p>
        
        <button
  onClick={handleLogin}
  className="w-full bg-spotify-green hover:bg-spotify-green-dark text-white font-bold py-3 px-4 rounded-full 
  transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer shadow-sm border-2 border-green-400 hover:border-white"
>
  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
  </svg>
  Continue with Spotify
</button>

<Link 
  href={HOME} 
  className="w-full font-semibold mt-2 py-2 px-3 rounded-full transition-all duration-300 
  flex items-center justify-center gap-2 cursor-pointer shadow-sm border-2 border-gray-500 
  text-gray-500 hover:text-gray-300 hover:border-gray-300 hover:bg-gray-700/10"
>
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
  </svg>
  Back to home
</Link>
      </div>
    </div>
  );
}