const express = require("express");
const router = express.Router();

const { createTodo } = require("../controllers/createTodo.js");
const { getTodo, getTodoById } = require("../controllers/getTodo.js");
const { updateTodoById } = require("../controllers/updataTodo.js");
const { deleteTodo } = require("../controllers/deleteTodo.js");

router.post("/createTodo", createTodo);
router.get("/getTodo", getTodo);
router.get("/getTodo/:id", getTodoById);
router.put("/updateTodo/:id", updateTodoById);
router.delete("/deleteTodo/:id", deleteTodo);

module.exports = router;
