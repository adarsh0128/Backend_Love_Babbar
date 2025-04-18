const Todo = require("../models/Todo.js");

exports.deleteTodo = async (req, res) => {
  try {
    const { id } = req.params;

    await Todo.findByIdAndDelete({ _id: id });

    res.status(200).json({
      success: true,
      message: "delete success",
    });
  } catch (error) {
    console.log(error);
    res.status({
      success: false,
      data: "Error in deleting",
    });
  }
};
