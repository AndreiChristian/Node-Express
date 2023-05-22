const express = require("express");
const bcrypt = require("bcryptjs");
const db = require("../../db/index");

const router = express.Router();

router.post("/", (req, res, next) => {
  const { username, password } = req.body;

  bcrypt
    .hash(password, 10)
    .then((hashedPassword) => {
      res.json({
        hashedPassword,
      });
    })
    .catch((err) => {
      console.log(err);
      return next(err);
    });
});

module.exports = router;
