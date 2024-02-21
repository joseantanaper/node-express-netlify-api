// YOUR_BASE_DIRECTORY/netlify/functions/api.ts

import express, { Router } from "express";
import serverless from "serverless-http";

const api = express();

const router = Router();
router.get("/hello", (req, res) => res.send("Hello World!"));

api.use("/api/", router);

// Avoid [[redirects]] section in netlify.toml
// api.use("/.netlify/functions/api/:splat/", router);

export const handler = serverless(api);
