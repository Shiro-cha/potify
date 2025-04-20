// app/api/auth/[...nextauth]/route.ts
import NextAuth from "next-auth";
import SpotifyProvider from "next-auth/providers/spotify";

const scopes = [
  'user-read-email',
  'user-read-private',
  'user-top-read',
  'playlist-read-private',
  'user-read-currently-playing',
  'user-read-playback-state',
].join(' ');

const handler = NextAuth({
  providers: [
    SpotifyProvider({
      clientId: process.env.SPOTIFY_CLIENT_ID!,
      clientSecret: process.env.SPOTIFY_CLIENT_SECRET!,
      authorization: {
        params: {
          scope: scopes,
          show_dialog: true
        },
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
});

export { handler as GET, handler as POST };
