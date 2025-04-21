'use client'
import { useEffect, useState } from "react";
import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";

import PageLoader from "@/components/shared/page-loader";
import Navigation from "@/components/dashboard/navigation";
import Signature from "@/components/dashboard/signature";
import InputSearch from "@/components/dashboard/input-search";
import SignOut from "@/components/dashboard/sign-out";
import UserAvatar from "@/components/dashboard/user-avatar";
import UserStats from "@/components/dashboard/user-stats";
import UserPlaylists from "@/components/dashboard/user-playlists";
import UserTrack from "@/components/dashboard/user-track";
import AppLogo from "@/components/dashboard/app-logo";
import ContentTitle from "@/components/dashboard/content-title";
import { MusicPlayer, Track } from "@/components/dashboard/music-player";

import { LOGIN } from "@/constants/routes";
import { User } from "@/types/User";
import { mockTrack } from "@/mocks/track";





export default function Dashboard() {
  const [user, setUser] = useState<User | null>(null);
  const { data: session, status } = useSession();
  const [currentTrack, setCurrentTrack] = useState<Track | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const router = useRouter();


useEffect(() => {
  if (status === "authenticated") {
    setUser(session.user as User);
    // TODO: fetch current playback state from Spotify API
    setCurrentTrack(mockTrack)
    setIsPlaying(true)
    
  }
}, [status, session]);

  useEffect(() => {
    if (status === "unauthenticated") router.push(LOGIN);
  }, [status, router]);

  

  if (status === "loading") return (
    <PageLoader/>
  );

  return (
    <div className="min-h-screen flex bg-gray-900">
      <div className="w-64 fixed left-0 top-0 h-screen bg-gray-800/50 border-r border-gray-700 p-4">
        <AppLogo/>
        <Navigation />
        <div className="sticky bottom-0 mt-auto pt-4 border-t border-gray-700 ">
          <Signature/>
        </div>
      </div>

      <div className="ml-64 flex-1 p-8">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-4">
            <ContentTitle/>
          </div>
          <div className="relative flex-1 max-w-xl mr-4">
            <InputSearch />
          </div>
          <div className="flex items-center gap-4">
            <SignOut/>
            <UserAvatar user={user}/>
          </div>
        </div>

        <UserStats />

        <div className="space-y-8">
          <UserPlaylists/>
          <UserTrack/>
        </div>
        {/* Music player rendered over bottom */}
    <MusicPlayer
      track={currentTrack}
      isPlaying={isPlaying}
      onPlay={() => {
        // call Spotify play API...
        setIsPlaying(true);
      }}
      onPause={() => {
        // call Spotify pause API...
        setIsPlaying(false);
      }}
      onNext={() => {
        // call Spotify skip to next...
      }}
      onPrevious={() => {
        // call Spotify skip to previous...
      }}
      onSeek={(pos) => {
        // call Spotify seek...
      }}
    />
      </div>
      
    </div>
  );
}