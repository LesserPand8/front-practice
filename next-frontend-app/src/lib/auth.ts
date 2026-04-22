import { type NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          return null;
        }

        const apiBaseUrl =
          process.env.LARAVEL_API_URL ?? process.env.NEXT_PUBLIC_API_BASE_URL;

        if (!apiBaseUrl) {
          console.error("API base URL is not configured.");
          return null;
        }

        const normalizedBaseUrl = apiBaseUrl.replace(/\/+$/, "");
        const loginUrl = normalizedBaseUrl.endsWith("/api")
          ? `${normalizedBaseUrl}/login`
          : `${normalizedBaseUrl}/api/login`;

        try {
          const res = await fetch(loginUrl, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
            },
            body: JSON.stringify({
              email: credentials.email,
              password: credentials.password,
            }),
          });

          if (!res.ok) {
            return null;
          }

          const data = await res.json();

          return {
            id: String(data.user.id),
            name: data.user.name,
            email: data.user.email,
            accessToken: data.token,
          };
        } catch (error) {
          console.error("Login error:", error);
          return null;
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.accessToken = user.accessToken;
        token.id = user.id;
      }
      return token;
    },
    async session({ session, token }) {
      session.accessToken = token.accessToken;
      session.user.id = token.id;
      return session;
    },
  },
  pages: {
    signIn: "/login",
  },
};
