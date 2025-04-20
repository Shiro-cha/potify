import NextAuth from "next-auth";
import SpotifyProvider from "next-auth/providers/spotify"

export default NextAuth({
    providers:[
        SpotifyProvider({
            clientId: process.env.SPOTIFY_CLIENT_ID as string,
            clientSecret: process.env.SPOTIFY_CLIENT_SECRET as string,
            authorization: {
              params: {
                scope: 'user-read-email user-read-private playlist-read-private user-library-read',
              },
            },
          })
    ],
    secret:process.env.NEXTAUTH_SECRET,
    debug: true
});