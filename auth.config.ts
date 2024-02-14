import type { NextAuthConfig } from 'next-auth';

export const authConfig = {
  pages: {
    signIn: '/login',
  },
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user;
      const isOnDashboard = nextUrl.pathname.startsWith(
        'https://next-dahboard-sepia.vercel.app/',
      );
      if (isOnDashboard) {
        if (isLoggedIn) return true;
        return false; // Redirect unauthenticated users to login page
      } else if (isLoggedIn) {
        console.log(new URL('/dashboard', nextUrl));
        // new URL('https://next-dahboard-sepia.vercel.app/', nextUrl),
        return Response.redirect(
          new URL('/dashboard', 'https://next-dahboard-sepia.vercel.app/'),
        );
      }
      return true;
    },
  },
  providers: [], // Add providers with an empty array for now
} satisfies NextAuthConfig;
