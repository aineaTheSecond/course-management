// this file consists of endpoints that are consumed by the API
const express = require("express");
const router = express.Router();

// root path
router.get("/", (req, res) => {
  res.send("root endpoint ");
});

// endpoint for creating a new course
router.post("/new", (req, res) => {
  console.log(req.body);
  res.send("Added!");
});

module.exports = router;
