exports.getPosts = (req, res, next) => {
  res.status(201).json({
    message: "hello",
  });
};

exports.createPosts = (req, res, next) => {
  const title = req.body.title;
  const conent = req.body.content;
  res.status(201).json({
    message: "success",
    content: {
      title,
      conent,
    },
  });
};
