// YOUR_BASE_DIRECTORY/netlify/functions/api.ts
import express, { Router, Request, Response } from "express"
import serverless from "serverless-http"
import dotenv from 'dotenv'
import todoRouter from '@routes/todoRouter'
dotenv.config()

const PORT = process.env.PORT || 3000
const BASE_URL = process.env.BASE_URL || '/api/'
const api = express()

// Base Router
const router = Router()
router.get("/", (req: Request, res: Response) => res.send({}))
router.get("/ping", (req: Request, res: Response) => res.send("pong"))
api.use(BASE_URL, router)

// TODO Router
api.use(BASE_URL + 'todo', todoRouter)

// Server
if (process.env.MODE === 'development') {
  api.listen(PORT, () => {
    console.log(`[server]: Server is running at http://localhost:${PORT}`)
  })
} else {
  console.log(`[server]: Production mode`);
}

export const handler = serverless(api);