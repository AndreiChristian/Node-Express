const express = require("express");
const db = require("../../db/index");
const bcrypt = require("bcryptjs");

const router = express.Router();

router.post("/", (req, res, next) => {
  const { email, password } = req.body;

  db.query("SELECT * FROM staff WHERE email = $1", [email], (err, result) => {
    if (err) {
      console.error(err);
    }

    const user = result.rows[0];

    if (!user) {
      throw new Error("could not find user");
    }

    bcrypt
      .compare(password, user.password)
      .then((isMatch) => {
        if (isMatch) {
          res.status(200).json({ message: "Authentication successful" });
        } else {
          res.status(401).json({ message: "Authentication failed" });
        }
      })
      .catch((error) => {
        console.error(error);
        res.status(500).json({ message: "Internal Server Error" });
      });
  });
});

module.exports = router;
