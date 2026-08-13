const express = require("express");
const controller = require("../controllers/translator");

const router = express.Router();

router.post("/", controller.translateToEnglish);

module.exports = router;