import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main(){
  const result = await prisma.modules.create({
    data: {
      name: "tecnologia",
      description: "firebase",
      CoursesModules: {
        create: {
          courses: {
            connect: {
              id: "40f1a831-d68c-4d41-ad7c-c6fad761f717"
            }
          }
        }
      }
    }
  });

  console.log(result);
}

main();