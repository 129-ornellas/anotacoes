import { PrismaClient } from "@prisma/client"
import express from "express"
import { z } from "zod"
const prisma = new PrismaClient()
const app = express()
const port = 8000
const AnnotationSchema = z.object({
  title: z.string().min(1),
  category: z.string().min(1),
  business_potential: z.number().min(1),
  remind_in: z.coerce.date(),
})
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
app.delete("/annotations", async (req, res) => {
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
