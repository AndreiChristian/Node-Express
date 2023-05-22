const express = require("express");

const router = express.Router();

const facilitiesController = require("../controllers/facilities");

router.get("/facilities", facilitiesController.getFacilityList);

router.get("/facilities/:facilityId", facilitiesController.getOneFacility);

router.post("/facilities", facilitiesController.postFacilty);

router.patch("/facilities/:facilityId", facilitiesController.patchFacility);

router.delete("/facilities/:facilityId", facilitiesController.deleteFacility);

module.exports = router;
