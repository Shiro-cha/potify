'use client'
import { useEffect, useState } from "react";
import { useSession} from "next-auth/react";
import { getToken } from "next-auth/jwt"
import { useRouter } from "next/navigation";

import { getUserPlaylists, getUserProfile, getRecentlyPlayed, getLikedSongs, getFollowingArtists, getEstimatedMinutesListened } from "../../../services/api/spotifyapi.service"
import { searchSpotify } from "../../../services/api/search.service";

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
import { User } from "@/utils/types/User";
import { mockTrack } from "@/mocks/track";





export default function Dashboard() {
  const [user, setUser] = useState<User | null>(null);
  const { data: session, status } = useSession();
  const [currentTrack, setCurrentTrack] = useState<Track | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [playlists, setPlaylists] = useState<any | null>(null);
  const [recentlyPlayed, setRecentlyPlayed] = useState<any | null>(null);
  const [likedSongs, setLikedSongs] = useState<any | null>(null);
  const [followingArtists, setFollowingArtists] = useState<any | null>(null);
  const [minutesListened, setMinutesListened] = useState<any | null>(null);

  const [searchQuery, setSearchQuery] = useState("");

  const router = useRouter();


  useEffect(() => {
    if (status === "authenticated" && session?.accessToken) {
      const accessToken = session.accessToken;
  
      // Fetch data after authentication and getting the access token
      const fetchData = async () => {
        try {
          const userProfile = await getUserProfile(accessToken);
          console.log("User Profile:", userProfile); 
          setUser(userProfile);
  
          const userPlaylists = await getUserPlaylists(accessToken);
          console.log("User Playlists:", userPlaylists); // Log user playlists
          setPlaylists(userPlaylists);
  
          // Fetch Recently Played Tracks
          const userRecentlyPlayed = await getRecentlyPlayed(accessToken);
          console.log("User Recently Played Tracks:", userRecentlyPlayed); // Log recently played tracks
          setRecentlyPlayed(userRecentlyPlayed);
  
          // Fetch Liked Songs
          const userLikedSongs = await getLikedSongs(accessToken);
          console.log("User Liked Songs:", userLikedSongs); // Log liked songs
          setLikedSongs(userLikedSongs);
  
          // Fetch Following Artists
          const userFollowingArtists = await getFollowingArtists(accessToken);
          console.log("User Following Artists:", userFollowingArtists); // Log following artists
          setFollowingArtists(userFollowingArtists);
  
          // Fetch Estimated Minutes Listened
          const userMinutesListened = await getEstimatedMinutesListened(accessToken);
          console.log("User Estimated Minutes Listened:", userMinutesListened); // Log estimated minutes listened
          setMinutesListened(userMinutesListened);
          
          // TODO: Set current track and playing state (You can replace this with real Spotify data)
          setCurrentTrack(mockTrack);
          setIsPlaying(true);
  
        } catch (err) {
          console.error("Error fetching Spotify data:", err);
        }
      };
  
      fetchData();
    }
  }, [status, session]);
  

  useEffect(() => {
    if (status !== "authenticated" || !session?.accessToken) return;
    if (!searchQuery || searchQuery.trim().length < 2) return;
  
    const accessToken = session.accessToken;
  
  }, [searchQuery, session, status]);

  

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

        <UserStats 
          minutesListened={minutesListened} 
          likedSongs={likedSongs} 
          following={followingArtists} 
        />

        <div className="space-y-8">
        <UserPlaylists playlists={playlists} />

          <UserTrack tracks={recentlyPlayed}/>
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
      onSeek={() => {
        // call Spotify seek...
      }}
    />
      </div>
      
    </div>
  );
}