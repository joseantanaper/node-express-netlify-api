// YOUR_BASE_DIRECTORY/netlify/functions/api.ts
import express, { Router, Request, Response } from 'express'
import serverless from 'serverless-http'
import dotenv from 'dotenv'
import todoRouter from '@routes/todoRouter'
dotenv.config()

const PORT = process.env.PORT || 3000
const BASE_URL = process.env.BASE_URL || '/api'
const TODO_URL = process.env.TODO_URL || '/todos'
const FULL_TODO_URL = BASE_URL + TODO_URL
const app = express()

app.use(express.json())

// ROOT Router
const router = Router()

// TODO Router
app.use(FULL_TODO_URL, todoRouter)

router.get('/', (req: Request, res: Response) =>
  res.send(`
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>node-express-netlify-api</title>
</head>
<body style="background: black; color: white;">
node-express-netlify-api
</body>
</html>
`)
)
router.get(BASE_URL + '/ping', (req: Request, res: Response) =>
  res.json({
    pong: new Date().toISOString(),
  })
)
router.get(BASE_URL + '/', (req: Request, res: Response) => {
  let routes: Array<string> = []
  let todoRoutes: Array<string> = []
  routes = router.stack.map((r) => r.route && r.route.path && r.route.path)
  todoRoutes = todoRouter.stack.map((r) => r.route && r.route)
  return res.json(routes.concat(todoRoutes))
})

app.use('/', router)

// Server
if (process.env.MODE === 'development') {
  app.listen(PORT, () => {
    console.log(`[server]: Server is running at http://localhost:${PORT}`)
  })
} else {
  console.log(`[server]: Production mode`)
}

export const handler = serverless(app)
