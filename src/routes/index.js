const express = require("express");
const router = express.Router();

const StatesRoutes = require("./states_routes");
const ZipCodeRoutes = require("./zipcodes_routes");
const CountriesRoutes = require("./countries_routes");

router.use("/states", StatesRoutes);
router.use("/zipcodes", ZipCodeRoutes);
router.use("/countries", CountriesRoutes);

module.exports = router;
