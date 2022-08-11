import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main(){
  const result = await prisma.authors.create({
    data: {
      name: "osvaldo",
      books: {
        createMany:{
          data: [{
              name: "aaa"
            },
            {
              name: "bbb"
            },
          ]
        }
      }
    }
  });

  console.log(result);
}

main();