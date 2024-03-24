import {
  authenticate,
  createUser,
  findUserByUserId,
} from "@/services/user-service";
import { getServerSession, type NextAuthOptions } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import NaverProvider from "next-auth/providers/naver";
import GoogleProvider from "next-auth/providers/google";
import KakaoProvider from "next-auth/providers/kakao";
import { signOut } from "next-auth/react";

export const authOptions: NextAuthOptions = {
  session: {
    strategy: "jwt", //(1) the default is jwt when no adapter defined, we redefined here to make it obvious what strategy that we use
    maxAge: 60 * 60 * 24,
  },
  callbacks: {
    async jwt({ token, account, profile, trigger, session }) {
      if (trigger === "update" && token) {
        const exUser = await findUserByUserId(token.userId!, {
          "profile.userType": 1,
        });
        token.userType = exUser.profile.userType;
      }
      else if (account && account.type === "credentials") {
        token.userId = account.providerAccountId;
        token.provider = account.provider; // this is Id that coming from authorize() callback
        const exUser = await findUserByUserId(token.userId!, {
          "profile.userType": 1,
        });
        if (!exUser) {
          signOut();
        } else if (exUser.profile.userType) {
          token.userType = exUser.profile.userType;
        } else {
          throw new Error("userType is Empty Error");
        }
      } else if (account?.provider === "google") {
        const exUser = await findUserByUserId(token.sub!, {
          "profile.userType": 1,
        });
        if (!exUser) {
          createUser({
            auth: {
              userId: token.sub!,
              username: token.name!,
              provider: account.provider!,
            },
          });
          token.userType = "normal";
        } else if (exUser.profile.userType) {
          token.userType = exUser.profile.userType;
        } else {
          throw new Error("userType is Empty Error");
        }
        token.provider = account.provider;
        token.userId = account.providerAccountId;
      } else if (account?.provider === "naver") {
        const exUser = await findUserByUserId(token.sub!, {
          "profile.userType": 1,
        });
        if (!exUser) {
          await createUser({
            auth: {
              userId: token.sub!,
              username: token.name!,
              provider: account.provider!,
            },
          });
          token.userType = "normal";
        } else if (exUser.profile.userType) {
          token.userType = exUser.profile.userType;
        } else {
          throw new Error("userType is Empty Error");
        }
        token.provider = account.provider;
        token.userId = account.providerAccountId;
      } else if (account?.provider === "kakao") {
        const exUser = await findUserByUserId(token.sub!, {
          "profile.userType": 1,
        });
        if (!exUser) {
          createUser({
            auth: {
              userId: token.sub!,
              username: token.name!,
              provider: account.provider!,
            },
          });
          token.userType = "normal";
        } else if (exUser.profile.userType) {
          token.userType = exUser.profile.userType;
        } else {
          throw new Error("userType is Empty Error");
        }
        token.provider = account.provider;
        token.userId = account.providerAccountId;
      }

      console.log("------------ JWT ------------");
      console.log({ token }, { account }, { profile });

      return token;
    },
    async session({ session, token, user }) {
      session.user.id = token.userId;
      session.user.provider = token.provider;
      session.user.userType = token.userType;
      console.log("------------ SESSION ------------");
      console.log({ session }, { token }, { user });
      return session;
    },
  },
  pages: {
    signIn: "/login",
  },
  providers: [
    Credentials({
      name: "Credentials",
      credentials: {
        username: {
          label: "username",
          type: "username",
          placeholder: "username",
        },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        const { username, password } = credentials as {
          username: string;
          password: string;
        };
        // console.log(username, password);
        return authenticate(username, password); //(5)
      },
    }),
    NaverProvider({
      clientId: process.env.NAVER_CLIENT_ID!,
      clientSecret: process.env.NAVER_CLIENT_SECRET!,
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
    KakaoProvider({
      clientId: process.env.KAKAO_CLIENT_ID!,
      clientSecret: process.env.KAKAO_CLIENT_SECRET!,
    }),
  ],
};

export const getServerAuthSession = () => getServerSession(authOptions);
