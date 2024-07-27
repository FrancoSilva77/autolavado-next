import NextAuth from "next-auth/next";
import CredentialsProviders from "next-auth/providers/credentials";

export const authOptions = {
  providers: [
    CredentialsProviders({
      name: 'Credentials',
      credentials: {
        credentials: {
          email: { label: 'Email', type: 'email', placeholder: 'email' },
          password: { label: 'Password', type: 'password', placeholder: '***' },
        },
      },

      async authorize(credentials, req){
        
      }
    }),
  ],
};