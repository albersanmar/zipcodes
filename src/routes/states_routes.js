const express = require("express");
const router = express.Router();

const StatesController = require("../app/controllers/states_controller");

router.get("/", StatesController.index);

module.exports = router;
