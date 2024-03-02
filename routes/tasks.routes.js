import { Router } from 'express'

export const tasksRouter = Router()

tasksRouter.post('/', (req, res) => {
  res.status(201).json({
    sucess: true,
    message: req.body
  })
})
