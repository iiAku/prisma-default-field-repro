import { Prisma, PrismaClient } from "@prisma/client"
const prisma = new PrismaClient({
  log: ["error", "info", "query", "warn"],
})
const main = async () => {
  await prisma.values.create({
    data: {
      value_id: "37958000-3275-4f29-a4b4-1d26705de434",
      value: 1000,
      //created_at: new Date(),
    },
  })
}

main()
