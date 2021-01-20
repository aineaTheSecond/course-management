// this file consists of endpoints that are consumed by the API
const express = require("express");
const router = express.Router();

// the database config
const db = require("../db.config");

// retrieve courses
router.get("/courses", async (req, res) => {
  try {
    const response = await db.select("*").from("courses");
    res.json({ response });
  } catch (error) {
    res.status(400).send({ message: "could not get records", error });
  }
});

// endpoint for creating a new course
router.post("/new", async (req, res) => {
  // desctructure the course details from the request body
  const { course_id, course_name, modules } = req.body;
  try {
    // insert the data into the database
    let result = await db("courses").returning("*").insert({
      course_id,
      course_name,
      modules,
    });
    res.json({ result });
  } catch (error) {
    // in case there's an error, send it back as a response
    res.status(400).json({ message: "could not add course", error });
  }
});

module.exports = router;
