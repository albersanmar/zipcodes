const express = require("express");
const router = express.Router();

const ZipcodeController = require("../app/controllers/zipcodes_controller");

router.get("/:zipcode", ZipcodeController.show);

module.exports = router;
