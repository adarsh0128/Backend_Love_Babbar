const Todo = require("../models/Todo.js");

exports.updateTodoById = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, description } = req.body;
    const todo = await Todo.findByIdAndUpdate(
      { _id: id },
      {
        title,
        description,
        updateddAt: Date.now(),
      }
    );
    res.status(200).send({
      success: true,
      data: todo,
    });
  } catch (error) {
    console.log(error);
    res.status({
      success: false,
      data: "Error in updating",
    });
  }
};
