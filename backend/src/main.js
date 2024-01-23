import { PrismaClient } from "@prisma/client"
import express from "express"

const prisma = new PrismaClient()
const app = express()
const port = 8000

app.post("/annotations", async (req, res) => {
  const annotation = await prisma.annotation.create({
    data: {
      title: "aaa",
      category: "letra",
      remind_in: new Date(),
      created_at: new Date(),
    },
  })

  return res.json(annotation)
})

app.get("/annotations", async (req, res) => {
  const annotation = await prisma.annotation.findMany()

  return res.json(annotation)
})

// safe delete
app.patch("/annotations", async (req, res) => {
  const annotation = await prisma.annotation.update({
    where: {
      id: 2,
    },
    data: {
      deleted_at: new Date(),
    },
  })

  return res.json(annotation)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
