import express, { Request, Response } from 'express'
import todoService from '@services/todoService'
const router = express.Router()

router.get('/ping', (req: Request, res: Response) => {
  res.send({
    pong: new Date().toISOString(),
  })
})

router.get('/', (req: Request, res: Response) => {
  res.send(todoService.getEntries())
})

router.post('/', (req: Request, res: Response) => {
  console.log('TODO', 'POST', req.body)
  todoService.addEntry(req.body)
})

router.put('/', (req: Request, res: Response) => {
  console.log('TODO', 'PUT', req.body)
  todoService.updateEntry(req.body)
})

router.delete('/', (req: Request, res: Response) => {
  console.log('TODO', 'DELETE', req.body)
  if (req.body && req.body.id) todoService.deleteEntry(req.body.id)
})

export default router
