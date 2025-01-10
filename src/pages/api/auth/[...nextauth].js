import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import FacebookProvider from "next-auth/providers/facebook";
import TwitterProvider from "next-auth/providers/twitter";
import LinkedInProvider from "next-auth/providers/linkedin";

export const authOptions = {
  session:{
    strategy:'jwt'
  },
    providers: [
      
        GoogleProvider({
          clientId: "1004558303584-n3t44fm5u4sjiliaov4rm83fc760tlb7.apps.googleusercontent.com",
          clientSecret: "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",
        }),
      
  ],
  callbacks: {
    
      async signIn({ user, account, profile, email, credentials }) {
        if(user.email){
// console.log({user,account,profile})
return true
        }
        else{
        console.error("User do not exists");
}
      },
      async redirect({ url, baseUrl }) {
        return url.startsWith(baseUrl) ? url : baseUrl;
      },
      async session({ session, token, user }) {
        
   //   console.log('token is:',token);
        return {...session,sid:token.sub};
      },
      async jwt({ token, user, account, profile, isNewUser }) {
        return token;
      },
    
  },
  secret: "mind-the-salt-dataxdfxdgxdf",

}

export default NextAuth(authOptions)