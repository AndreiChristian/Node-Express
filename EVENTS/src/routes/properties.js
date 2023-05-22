const express = require("express");

const router = express.Router();

const propertiesControllers = require("../controllers/properties");

router.get("/properties", propertiesControllers.getPropertyList);

router.get("/properties/:propertyId", propertiesControllers.getOneProperty);

router.post("/properties", propertiesControllers.postProperty);

router.patch("/properties/:propertyId", propertiesControllers.patchOneProperty);

router.delete("/properties/:propertyId", propertiesControllers.deleteProperty);

module.exports = router;
