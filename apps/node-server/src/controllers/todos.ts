import { RequestHandler, Request, Response } from 'express'
import { v4 as uuidv4 } from 'uuid'

import Todo from '../models/todo'

const TODOS: Todo[] = []

export const createTodo = (req: Request, res: Response) => {
  const { title } = req.body as Todo

  if (title) {
    const id = uuidv4()
    const newTodo = new Todo(id, title)
    TODOS.push(newTodo)
    res
      .status(201)
      .json({ message: 'Item is created', succeed: true, createTodo: newTodo })
  } else {
    throw new Error('Not enough parameters')
  }
}

export const getTodos: RequestHandler = (req, res) => {
  res.json({ todos: TODOS })
}

export const updateTodo: RequestHandler<{ id: string }> = (req, res) => {
  const todoId = req.params.id
  const { title, isCompleted } = req.body

  const todoIndex = TODOS.findIndex(todo => todo.id === todoId)

  if (todoIndex < 0) {
    throw new Error('Could not find todo!')
  }
  TODOS[todoIndex] = new Todo(TODOS[todoIndex].id, title, isCompleted)
  res.json({
    message: 'Update successful',
    succeed: true,
    updateTodo: TODOS[todoIndex],
  })
}

export const deleteTodo: RequestHandler = (req, res) => {
  const todoId = req.params.id
  const todoIndex = TODOS.findIndex(todo => todo.id === todoId)
  if (todoIndex < 0) {
    throw new Error('Could not find todo!')
  }

  TODOS.splice(todoIndex, 1)
  res.json({ message: 'Todo deleted!', succeed: true })
}
