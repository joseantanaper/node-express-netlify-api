// YOUR_BASE_DIRECTORY/netlify/functions/api.ts

import express, { Router, Request, Response } from "express";
import serverless from "serverless-http";
// import todoRouter from './routes/todoRouter'

import dotenv from 'dotenv';
dotenv.config();

const port = process.env.PORT
const api = express();

const router = Router();
router.get("/hello", (req, res) => res.send("Hello World!"));

router.get('/res', (req: Request, res: Response) => {
  res.send({id: 111})
});
api.use("/api/", router)

// api.use('api/todo', todoRouter);

if (process.env.MODE === 'development') {
  api.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`)
  })
} else {
  console.log(`[server]: Production mode`);
}
export const handler = serverless(api);