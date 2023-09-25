import express from 'express';
const router=express.Router();
import todosController from '../controllers/todos.js';

router.get('/',todosController.getTodos);

router.post('/createTodo',todosController.createTodo);

router.put('/markComplete',todosController.markComplete);

router.put('/markIncomplete',todosController.markIncomplete);

router.delete('/deleteTodo',todosController.deleteTodo);

export default router;