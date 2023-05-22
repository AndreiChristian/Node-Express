const express = require("express");
const bcrypt = require("bcryptjs");
const db = require("../../db/index");

const router = express.Router();

router.post("/", (req, res, next) => {
  const { first_name, email, last_name, password } = req.body;

  bcrypt
    .hash(password, 10)
    .then((hashedPassword) => {
      db.query(
        "INSERT INTO staff (first_name, last_name, email,  password) VALUES ($1, $2, $3, $4) ",
        [first_name, last_name, email, hashedPassword],
        (err, result) => {
          if (err) {
            console.log(err);
            throw new Error("Could not store the new user in the db");
          }
          res.status(201).json({
            message: "Success",
          });
        }
      );
    })
    .catch((err) => {
      console.log(err);
      return next(err);
    });
});

module.exports = router;
