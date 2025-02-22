import type { NextAuthOptions} from "next-auth";
import GitHubProvider from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";
export const options: NextAuthOptions = {
    providers: [
        GitHubProvider({
            clientId: process.env.NEXT_PUBLIC_GITHUB_ID as string,
            clientSecret: process.env.NEXT_PUBLIC_GITHUB_SECRET as string

        }),
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                username: {
                    label: "Username:",
                    type: "text",
                    placeholder: "Your username"
                },
                password: {
                    label: "Password",
                    type: "password",
                }
            },
            async authorize(credentials){
                // retrieve data to verify with credentials
                const user = {
                    id: "1",
                    name: "Davin",
                    email: "Davin@gmail.com",
                    password: "nextauth"
                }

                if(
                    credentials?.username === user.name &&
                    credentials?.password === user.password){
                    return user;
                } else {
                    return null;
                }
            }
        })
    ],

};