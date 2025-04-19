const Post = require("../models/postModel.js");
const Like = require("../models/likeModel.js");

exports.likePost = async (req, res) => {
  try {
    const { post, user } = req.body;

    const like = new Like({
      post,
      user,
    });

    const saveLike = await like.save();

    const updatePost = await Post.findByIdAndUpdate(
      post,
      { $push: { likes: saveLike._id } },
      { new: true }
    )
      .populate("likes")
      .exec();

    res.json({
      post: updatePost,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "error in liking post",
    });
  }
};

exports.unlikePost = async (req, res) => {
  try {
    const { post, like } = req.body;

    const deleteLike = await Like.findOneAndDelete({ post: post, _id: like });

    const updatedPost = await Post.findByIdAndUpdate(
      post,
      { $pull: { likes: deleteLike._id } },
      { new: true }
    );

    res.json({
      post: updatedPost,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "error in unliking post",
    });
  }
};
