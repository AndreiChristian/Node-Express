exports.getFacilityList = (req, res, next) => {
    db.query("SELECT * FROM facilities", (err, result) => {
      if (err) {
        console.log(err);
        return next(err);
      }
  
      res.status(200).json(result.rows);
    });
  }