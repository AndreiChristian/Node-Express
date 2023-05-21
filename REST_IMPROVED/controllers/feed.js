const { validationResult } = require("express-validator");
const Post = require("../models/post");

exports.getPosts = (req, res, next) => {
  res.status(201).json({
    posts: [
      {
        _id: "1",
        title: "First Post",
        content: "This is the first post",
        imageUrl: "images/duck.jpg",
        creator: {
          name: "Max",
        },
        createdAt: new Date(),
      },
    ],
  });
};

exports.createPosts = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    console.log;
    return res.status(422).json({
      message: "Validation failed, entered incorect data",
      errors: errors.array,
    });
  }
  const title = req.body.title;
  const content = req.body.content;
  const imageUrl = req.body.imageUrl;

  const post = new Post({
    title: title,
    content,
    imageUrl,
    creator: {
      name: "Max",
    },
  });
  post
    .save()
    .then((result) => {
      console.log(result);
      res.status(201).json({
        message: "success",
        post: result,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};
