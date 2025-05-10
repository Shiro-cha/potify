
import NextAuth, { NextAuthOptions } from "next-auth";
import SpotifyProvider from "next-auth/providers/spotify";

const scope = [
  "user-read-private",
  "user-read-email",
  "user-library-read",
  "playlist-read-private",
  "user-follow-read",
  "user-read-recently-played",
  "user-read-playback-position",      // ← Ajoute ça
  "user-top-read",                    // ← Et ça pour stats perso
  "user-read-currently-playing",      // ← Optionnel mais utile
  "user-read-playback-state",         // ← Optionnel mais utile
].join(' ');


export const authOptions: NextAuthOptions = {
  providers: [
    SpotifyProvider({
      clientId: process.env.SPOTIFY_CLIENT_ID as string,
      clientSecret: process.env.SPOTIFY_CLIENT_SECRET as string,
      authorization: {
        params: {
          scope,
        },
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async signIn(response) {
  
      return true
    },
    async redirect({ url, baseUrl }) {
      return baseUrl
    },
    async session({ session, token }) {
      session.accessToken = token.accessToken;
      return session;
    },
    
    async jwt({ token, account }) {
      if (account) {
        token.accessToken = account.access_token;
        token.refreshToken = account.refresh_token;
        token.expiresAt = account.expires_at;
      }
      return token;
    }
    
  },
  secret: process.env.NEXTAUTH_SECRET,
  debug: true,
};

export default NextAuth(authOptions);
