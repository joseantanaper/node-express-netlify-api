import express, { Request, Response } from 'express'
const router = express.Router()

router.get('/', (req: Request, res: Response) => {
  res.send([])
})
router.get('/ping', (req: Request, res: Response) => {
  res.send("Todo/pong")
})

export default router