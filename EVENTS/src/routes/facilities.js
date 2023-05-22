const express = require("express");
const db = require("../../db");
const { error } = require("console");

const router = express.Router();

router.get("/facilities", (req, res, next) => {
  db.query("SELECT * FROM facilities", (err, result) => {
    if (err) {
      console.log(err);
      return next(err);
    }

    res.status(200).json(result.rows);
  });
});

router.get("/facilities/:facilityId", (req, res, next) => {
  const { facilityId } = req.params;

  db.query(
    "SELECT * FROM facilities WHERE id = $1",
    [facilityId],
    (err, result) => {
      if (err) {
        console.log(err);
        return next(err);
      }
      res.send(result.rows);
    }
  );
});

module.exports = router;

router.post("/facilities", (req, res, next) => {
  const name = req.body.name;

  db.query(
    "INSERT INTO facilities (name) VALUES ($1)",
    [name],
    (err, result) => {
      if (err) {
        console.log(error);
        return next(err);
      }

      res.status(201).json({
        message: "Inserted successfully",
      });
    }
  );
});
