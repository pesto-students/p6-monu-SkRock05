const express = require("express");
const getForeCastData = require("../controller/forecastController");
const router = express.Router();

router.get("/:cityName/:days", getForeCastData);

module.exports = router;
