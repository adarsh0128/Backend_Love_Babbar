const Post = require("../models/postModel.js");
const Comment = require("../models/commentModel.js");

exports.createComment = async (req, res) => {
  try {
    const { post, user, body } = req.body;

    const comment = new Comment({
      post,
      user,
      body,
    });
    const savedComment = await comment.save();

    const updatedPost = await Post.findByIdAndUpdate(
      post,
      { $push: { comments: savedComment._id } },
      { new: true }
    )
      .populate("comments")
      .exec();
    res.json({
      data: updatedPost,
    });
  } catch (error) {
    res.status(500).json({
      error: "Error While Creating comment",
    });
  }
};
