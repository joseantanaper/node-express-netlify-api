import express, { Request, Response } from 'express'
import todoService from '@services/todoService'
const router = express.Router()
const whereami = 'todoRouter'

router.get('/ping', (req: Request, res: Response) => {
  res.set('Access-Control-Allow-Origin', '*')
  console.log(whereami, 'ping')
  res.json({
    pong: new Date().toISOString(),
  })
})

router.get('/', (req: Request, res: Response) => {
  res.set('Access-Control-Allow-Origin', '*')
  console.log(whereami, 'get', '/')
  res.json(todoService.getEntries())
})

router.post('/', (req: Request, res: Response) => {
  res.set('Access-Control-Allow-Origin', '*')
  console.log(whereami, 'post', '/', req.body)
  res.json(todoService.addEntry(req.body))
})

router.put('/', (req: Request, res: Response) => {
  res.set('Access-Control-Allow-Origin', '*')
  console.log(whereami, 'put', '/', req.body)
  res.json(todoService.updateEntry(req.body))
})

router.delete('/', (req: Request, res: Response) => {
  res.set('Access-Control-Allow-Origin', '*')
  console.log(whereami, 'delete', '/', req.body)
  if (req.body && req.body.id) todoService.deleteEntry(req.body.id)
  res.json(req.body)
})

export default router
