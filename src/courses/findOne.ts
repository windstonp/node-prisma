import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main(){
  const course = await prisma.courses.findFirst();

  console.log(course);
}

main();