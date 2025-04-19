const express = require("express");
const router = express.Router();

const { createPost } = require("../controllers/postController.js");
const { createComment } = require("../controllers/commentController.js");
const { likePost, unlikePost } = require("../controllers/likeController.js");

router.post("/comments/create", createComment);
router.post("/posts/create", createPost);
router.post("/likes/like", likePost);
router.post("/likes/unlike", unlikePost);

module.exports = router;
