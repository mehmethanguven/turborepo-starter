import express, { Request, Response } from 'express'
import bodyParser from 'body-parser'
import todoRoutes from './routes/todo-routes'

const app = express()
const port = 5001
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.get('/', (req: Request, res: Response) => {
  res.send('Welcome to server:5001')
})

app.use('/api/todos', todoRoutes)

app.listen(port, () => {
  console.log('Server is running on port: ', port)
})
