const Todo = require("../models/Todo.js");

exports.getTodo = async (req, res) => {
  try {
    const allTodo = await Todo.find({});
    res.status(200).json({
      success: true,
      data: allTodo,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      data: error,
    });
  }
};

exports.getTodoById = async (req, res) => {
  try {
    const { id } = req.params;
    const oneTodo = await Todo.find({ _id: id });

    if (!oneTodo) {
      res.status(404).json({
        success: false,
        message: "Todo not found",
      });
    }
    res.status(200).json({
      success: true,
      data: oneTodo,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      data: error,
    });
  }
};
