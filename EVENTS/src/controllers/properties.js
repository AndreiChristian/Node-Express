exports.getPropertyList = (req, res, next) => {
  res.json({
    message: " get properties list",
  });
};

exports.getOneProperty = (req, res, next) => {
  const propertyId = req.params.propertyId;
  res.json({
    message: "get properties one",
    propertyId: propertyId
  });
};

exports.postProperty = (req, res, next) => {
  res.json({
    message: "post",
  });
};

exports.patchOneProperty = (req, res, next) => {
  const propertyId = req.params.propertyId;
  res.json({
    message: "patch ",
    propertyId,
  });
};

exports.deleteProperty = (req, res, next) => {
  const propertyId = req.params.propertyId;
  res.json({
    message: "delete",
    propertyId,
  });
};
