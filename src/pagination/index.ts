import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main(){
  const result = await prisma.courses.findMany({
    skip: 0,
    take: 3
  });

  console.log(result);
}

main();