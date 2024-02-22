import express, { Request, Response } from 'express'
import todoService from '@services/todoService'
const router = express.Router()

router.get('/ping', (req: Request, res: Response) => {
  res.json({
    pong: new Date().toISOString(),
  })
})

router.get('/', (req: Request, res: Response) => {
  res.json(todoService.getEntries())
})

router.post('/', (req: Request, res: Response) => {
  console.log('TODO', 'POST', req.body)
  res.json(todoService.addEntry(req.body))
})

router.put('/', (req: Request, res: Response) => {
  console.log('TODO', 'PUT', req.body)
  res.json(todoService.updateEntry(req.body))
})

router.delete('/', (req: Request, res: Response) => {
  console.log('TODO', 'DELETE', req.body)
  if (req.body && req.body.id) todoService.deleteEntry(req.body.id)
  res.json(req.body)
})

export default router
