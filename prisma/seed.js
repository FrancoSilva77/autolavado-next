const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcryptjs');

const prisma = new PrismaClient();

const pass = '123456';

async function main() {
  const passwordHash = await bcrypt.hash(pass, 10);
  try {
    const admin = await prisma.user.upsert({
      where: {
        email: 'admin@gmail.com',
      },
      update: {},
      create: {
        email: 'admin@gmail.com',
        password: passwordHash,
      },
    });
  } catch (error) {
    console.log(error);
  }

  console.log('Admin creado correctamente');
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
