const { Todo } = require('../model/model')

const TodoController = {
  addTodo: async (req, res) => {
    try {
      const newTodo = await Todo.create({
        data: req.body.data,
        createdAt: Date.now(),
      })
      await newTodo.save()
      res.status(200).json(newTodo)
    } catch (error) {
      res(500).json(error.message)
    }
  },

  getAllTodo: async (req, res) => {
    try {
      const todos = await Todo.find({}).sort({ createdAt: -1 })
      res.status(200).json(todos)
    } catch (error) {
      res.status(500).json(error.message)
    }
  },

  toggleTodoDone: async (req, res) => {
    try {
      const todoRef = await Todo.findById(req.params.id)
      const todo = await Todo.findOneAndUpdate({ _id: req.params.id }, { done: !todoRef.done })
      await todo.save()
      res.status(200).json(todo)
    } catch (error) {
      res.status(500).json(error.message)
    }
  },

  updateTodo: async (req, res) => {
    try {
      await Todo.findByIdAndUpdate({ _id: req.params.id }, { data: req.body.data })
      const todo = await Todo.findById(req.params.id)

      res.status(200).json(todo)
    } catch (error) {
      res.status(500).json(error.message)
    }
  },

  deleteTodo: async (req, res) => {
    try {
      const todo = await Todo.findByIdAndDelete(req.params.id)
      res.status(200).json(todo)
    } catch (error) {
      res.status(500).json(error.message)
    }
  },
}
module.exports = TodoController
