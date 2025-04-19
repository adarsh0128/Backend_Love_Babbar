const Post = require("../models/postModel.js");

exports.createPost = async (req, res) => {
  try {
    const { title, body } = req.body;

    const post = new Post({
      title,
      body,
    });

    const savedPost = await post.save();

    res.json({
      data: savedPost,
    });
  } catch (error) {
    console.log(error);
    res.json({
      message: "error in creating post",
    });
  }
};

exports.getAllPosts = async (req, res) => {
  try {
    const posts = await Post.find()
      .populate("likes")
      .populate("comments")
      .exec();
    res.json({
      posts,
    });
  } catch (error) {
    return res.status(400).json({
      error: "Error while fetching post",
    });
  }
};
