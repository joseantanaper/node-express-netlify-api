// YOUR_BASE_DIRECTORY/netlify/functions/api.ts

import express, { Router } from "express";
import serverless from "serverless-http";

import dotenv from 'dotenv';
dotenv.config();

const port = 3000
const api = express();

const router = Router();
router.get("/hello", (req, res) => res.send("Hello World!"));

api.use("/api/", router);

export const handler = serverless(api);

if(process.env.MODE === 'development') {
api.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`)
})
} else {
  console.log(`[server]: Production mode`);
}