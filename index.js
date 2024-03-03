import express, { json } from 'express'
import cors from 'cors'
import { tasksRouter } from './routes/tasks.routes.js'
import { recordsRouter } from './routes/records.routes.js'

const app = express()
app.disable('x-powered-by')

app.use(cors())
app.use(json())

app.get('/', (req, res) => {
  res.json({
    sucess: true,
    message: 'Timelezz Up!'
  })
})

app.use('/tasks', tasksRouter)
app.use('/tasks', recordsRouter)

app.use((req, res) => {
  res.status(404).json({
    status: false,
    message: 'Unable to find service'
  })
})
const port = process.env.PORT || 3000
app.listen(port, () => {
  console.log(`${'listening for requests on port 3000'}`)
})
