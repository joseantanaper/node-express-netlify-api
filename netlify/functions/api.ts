// YOUR_BASE_DIRECTORY/netlify/functions/api.ts
import express, { Router, Request, Response } from "express"
import serverless from "serverless-http"
import dotenv from 'dotenv'
// import todoRouter from '@routes/todoRouter'
import todoRouter from '../../src/routes/todoRouter'
dotenv.config()

const PORT = process.env.PORT || 3000
const BASE_URL = process.env.BASE_URL || '/api/'
const api = express()

const router = Router();
router.get("/", (req, res) => res.send("Api"))
router.get("/hello", (req, res) => res.send("Hello World!"))

router.get('/res', (req: Request, res: Response) => {
  res.send({id: 111})
})

api.use(BASE_URL, router)

api.use(BASE_URL + 'todo', todoRouter)

if (process.env.MODE === 'development') {
  api.listen(PORT, () => {
    console.log(`[server]: Server is running at http://localhost:${PORT}`)
  })
} else {
  console.log(`[server]: Production mode`);
}
export const handler = serverless(api);