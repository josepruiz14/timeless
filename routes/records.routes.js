import { Router } from 'express'

export const recordsRouter = Router()

recordsRouter.post('/', (req, res) => {
  res.status(201).json({
    sucess: true,
    message: req.body
  })
})
