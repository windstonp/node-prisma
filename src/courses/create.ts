import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main(){
  const result = await prisma.courses.create({
    data: {
      name: "Curso React Native",
      duration: 200,
      description: "curso de React Native",
      teacher: {
        connectOrCreate: {
          where: {
            name: "osvaldo"
          },
          create: {
            name: "osvaldo"
          }
        }
      }
    }
  });

  const result2 = await prisma.courses.create({
    data: {
      name: "Curso react",
      duration: 200,
      description: "curso de react",
      teacher: {
        connect: {
          id: "ab86693e-bcfd-4bfa-9db7-f4198ecc3824"
        }
      }
    }
  });

  console.log(result2);
}

main();