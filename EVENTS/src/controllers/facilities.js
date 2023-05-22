const db = require("../../db");

exports.getFacilityList = (req, res, next) => {
  db.query("SELECT * FROM facilities", (err, result) => {
    if (err) {
      return next(err);
    }

    res.status(200).json(result.rows);
  });
};

exports.getOneFacility = (req, res, next) => {
  const { facilityId } = req.params;

  db.query(
    "SELECT * FROM facilities WHERE id = $1",
    [facilityId],
    (err, result) => {
      if (err) {
        return next(err);
      }
      res.send(result.rows);
    }
  );
};

exports.postFacilty = (req, res, next) => {
  const name = req.body.name;

  db.query(
    "INSERT INTO facilities (name) VALUES ($1)",
    [name],
    (err, result) => {
      if (err) {
        console.log(err);
        return next(err);
      }

      res.status(201).json({
        message: "Inserted successfully",
      });
    }
  );
};

exports.patchFacility = (req, res, next) => {
  const { facilityId } = req.params;

  const { name } = req.body;

  db.query(
    "UPDATE facilities SET name = $1 WHERE id = $2",
    [name, facilityId],
    (err, result) => {
      if (err) {
        console.log(err);
        return next(error);
      }
      console.log(result);
      res.status(201).json({
        message: "Updated successfully",
      });
    }
  );
};

exports.deleteFacility = (req, res, next) => {
  const { facilityId } = req.params;

  db.query(
    "DELETE FROM facilities WHERE id = $1",
    [facilityId],
    (err, result) => {
      if (err) {
        return next(err);
      }
      res.status(201).json({
        message: "Deleted Successfully",
      });
    }
  );
};
