import { getUserPlaylists,
    getUserProfile,
    getRecentlyPlayed,
    getLikedSongs,
    getFollowingArtists,
    getEstimatedMinutesListened, } from "../../../services/api/spotifyapi.service";


  
  const my_token = "BQDGLqwHAxMR9i3rpmsYLN5n64vRPVtowbhjQaJeWQDPkGfCcJz_yw8gsK9LJV8V25N5hzla3JGSyoa134nKE6IfgHsTVHoH7m7ifhPeyXSOP-9Ok6jHunbIZ5BAtINEGegHIPkpZa9bTcxqjkanTLNu8_mw915Cyc3yM6eYMyJaWVlSPhlYq9uruCcRDw-Qn9-mFTQEk_JafhJqkogT98fvA75Ighh1MfmAUlFIT_Yo7BeZsrrAV_4LLFFIb8G2rq_nat08G4MhOyrk6HtOVANlC6eQPc4hkJp7";
  
  (async function runTests() {
    console.log("🔎 Testing Spotify Service functions...\n");
  
    const profile = await getUserProfile(my_token);
    console.log("👤 Profile:", profile?.display_name);
  
    const playlists = await getUserPlaylists(my_token);
    console.log(`🎵 Playlists (${playlists?.length}):`, playlists?.map(p => p.name));
  
    const liked = await getLikedSongs(my_token);
    console.log(`❤️ Liked Songs (${liked?.length}):`, liked?.slice(0, 3).map(s => s.track.name));
  
    const following = await getFollowingArtists(my_token);
    console.log(`🧑‍🎤 Following (${following?.length}):`, following?.map(a => a.name));
  
    const recently = await getRecentlyPlayed(my_token);
    console.log(`🔁 Recently Played (${recently?.length}):`, recently?.map(r => r.track.name));
  
    const minutes = await getEstimatedMinutesListened(my_token);
    console.log(`⏱️ Estimated Minutes Listened: ${minutes?.totalMinutes}`);
  
  })();
  