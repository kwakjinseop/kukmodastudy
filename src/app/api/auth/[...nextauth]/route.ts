import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import GitHubProvider from "next-auth/providers/github";


export const authOptions = {
  secret: process.env.NEXTAUTH_SECRET as string,
  providers: [
    GitHubProvider({
      clientId: 'Ov23lis1fqymXCHKD63h',
      clientSecret: '5dce1dc0a281a91202c5d567ba2a8c1b31a478ff'
    }),
    /*GitHubProvider({
      clientId: process.env.GITHUB_ID as string,
      clientSecret: process.env.GITHUB_SECRET as string,
    }),*/
  ]
  
};
export default NextAuth(authOptions);


