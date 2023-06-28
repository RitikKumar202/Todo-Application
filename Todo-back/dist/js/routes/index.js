"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const todos_1 = require("../controllers/todos");
const body_parser_1 = __importDefault(require("body-parser"));
const router = (0, express_1.Router)();
router.get("/todos", todos_1.getTodos);
router.post("/add-todo", body_parser_1.default.json(), todos_1.addTodo);
router.put("/edit-todo/:id", body_parser_1.default.json(), todos_1.updateTodo);
router.delete("/delete-todo/:id", body_parser_1.default.json(), todos_1.deleteTodo);
exports.default = router;
