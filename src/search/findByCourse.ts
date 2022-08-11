import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main(){
  const result = await prisma.courses.findMany({
    where: {
      id: "40f1a831-d68c-4d41-ad7c-c6fad761f717"
    },
    include: {
      CoursesModules: true,
    }
  });

  console.log(JSON.stringify(result));
}

main();