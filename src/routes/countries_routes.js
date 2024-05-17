const express = require("express");
const router = express.Router();

const CountriesController = require("../app/controllers/countries_controller");

router.get("/", CountriesController.index);
router.get("/:countryId", CountriesController.show);

module.exports = router;
