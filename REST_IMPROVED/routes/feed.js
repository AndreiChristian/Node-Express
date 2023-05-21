const express = require("express");
const { body } = require("express-validator");

const router = express.Router();
const feedController = require("../controllers/feed");

router.get("/posts", feedController.getPosts);
router.post(
  "/posts",
  [
    body("title").trim().isLength({ min: 5 }),
    body("content").trim().isLength({ min: 5 }),
  ],
  feedController.createPosts
);

router.get("/posts/:postId", feedController.getPost);

router.put(
  "/posts/:postId",
  [
    body("title").trim().isLength({ min: 5 }),
    body("content").trim().isLength({ min: 5 }),
  ],
  feedController.updatePost
);

module.exports = router;
