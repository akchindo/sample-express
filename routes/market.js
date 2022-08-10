const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  res.send("<p>this is the market</p>");
});

module.exports = router;
