import NextAuth, { User } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import axios from "axios";
import { JWT } from "next-auth/jwt";
import { AuthResponse } from "@/types/types";

    const handler = NextAuth({
    providers: [
        CredentialsProvider({
        name: "Credentials",
        credentials: {
            identifier: {},
            password: {},
        },
        authorize: async (credentials) => {
            if (!credentials) {
            return null;
            }

            try {
            const res = await axios.post<AuthResponse>(`${process.env.NEXT_PUBLIC_BASE_URL}/auth/local`, {
                identifier: credentials.identifier,
                password: credentials.password,
            });

            const user = res.data;

            if (user) {
                return {
                jwt: user.jwt,
                name: user.user.username,
                id: user.user.id,
                email: user.user.email,
                };
            }
            return null;
            } catch (error: any) { //eslint-disable-line @typescript-eslint/no-explicit-any
            if (
                error.response &&
                error.response.data &&
                error.response.data.error
            ) {
                throw new Error(error.response.data.error.message);
            }
            return null;
            }
        },
        }),
    ],
    callbacks: {
        jwt: async ({ token, user }: { token: JWT; user?: User }) => {
        if (user) {
            token.id = user.id;
            token.email = user.email;
            token.name = user.name;
            token.jwt = (user as any).jwt; //eslint-disable-line @typescript-eslint/no-explicit-any
        }
        return token;
        },
        session: async ({ session, token }: { session: any; token: JWT }) => { //eslint-disable-line @typescript-eslint/no-explicit-any
        session.user = {
            id: token.id,
            email: token.email,
            name: token.name,
        };
        session.jwt = token.jwt;
        return session;
        },
    },
    pages: {
        signIn: "/",
        signOut: "/",
    },
    debug: true,
    });

export { handler as GET, handler as POST };
