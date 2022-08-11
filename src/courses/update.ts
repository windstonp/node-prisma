import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main(){
  const result = await prisma.courses.update({
    where: {
      id: "36e23175-a9c3-4c0a-a39d-d225d3d4719a"
    },
    data: {
      name: "CURSO DE NODE"
    }
  });

  console.log(result);
}

main();