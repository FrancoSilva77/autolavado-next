import NextAuth from 'next-auth';
import CredentialsProviders from 'next-auth/providers/credentials';
import bcrypt from 'bcryptjs';
import { prisma } from '@/src/lib/prisma';

const authOptions = {
  providers: [
    CredentialsProviders({
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'text', placeholder: 'jsmith' },
        password: { label: 'Password', type: 'password', placeholder: '***' },
      },
      async authorize(credentials, req) {
        console.log(credentials);
        const userFound = await prisma.user.findUnique({
          where: {
            email: credentials.email,
          },
        });
        if (!userFound) throw new Error('Usuario no encontrado');

        console.log(userFound);

        const matchPassword = await bcrypt.compare(
          credentials.password,
          userFound.password
        );

        if (!matchPassword) throw new Error('La contraseña es incorrecta');

        return {
          id: userFound.id,
          email: userFound.email,
        };
      },
    }),
  ],

  // secret: process.env.NEXTAUTH_SECRET,

  // pages: {
  //   signIn: '/iniciar-sesion',
  // },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
