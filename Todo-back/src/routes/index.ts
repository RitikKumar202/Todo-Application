import { Router } from "express";
import {
  getTodos,
  addTodo,
  updateTodo,
  deleteTodo,
} from "../controllers/todos";
import bodyParser from "body-parser";
const router: Router = Router();

router.get("/todos", getTodos);

router.post("/add-todo", bodyParser.json(), addTodo);

router.put("/edit-todo/:id", bodyParser.json(), updateTodo);

router.delete("/delete-todo/:id", bodyParser.json(), deleteTodo);

export default router;
