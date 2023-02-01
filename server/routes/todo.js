const router = require('express').Router()

const todoController = require('../controllers/TodoController')

router.post('/', todoController.addTodo)
router.get('/', todoController.getAllTodo)
router.get('/:id', todoController.toggleTodoDone)
router.put('/:id', todoController.updateTodo)
router.delete('/:id', todoController.deleteTodo)

module.exports = router
