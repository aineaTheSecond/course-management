// this file consists of endpoints that are consumed by the API
const express = require("express");
const router = express.Router();

// the database config
const db = require("../db.config");

// retrieve courses
router.get("/courses/list", async (req, res) => {
  try {
    const response = await db.select("*").from("courses");
    res.json({ response });
  } catch (error) {
    res.status(400).send({ message: "could not get records", error });
  }
});

// get course by id
router.get("/courses/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const response = await db("courses").where("course_id", id);

    res.send(response);
  } catch (error) {
    res.send(error);
  }
});

// endpoint for creating a new course
router.post("/courses/new", async (req, res) => {
  console.log(req.body);
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

// update a course
router.put("/course/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { course_name, modules } = req.body;
    const response = await db
      .select("*")
      .from("courses")
      .where("course_id", "=", id)
      .update({
        course_name,
        modules,
      });

    res.send(response);
  } catch (error) {
    res.send(error);
  }
});

// create a new module
router.post("/modules/new", async (req, res) => {
  try {
    const { module_id, module_name } = req.body;
    // insert the data into the database
    let result = await db("modules").returning("*").insert({
      module_id,
      module_name,
    });

    res.json({ result });
  } catch (error) {
    // in case there's an error, send it back as a response
    res.status(400).json({ message: "could not add course", error });
  }
});

// retrieve modules
router.get("/modules/list", async (req, res) => {
  try {
    const response = await db.select("*").from("modules");
    res.json({ response });
  } catch (error) {
    res.status(400).send({ message: "could not get records", error });
  }
});

// get module by id
router.get("/modules/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const response = await db("modules").where("module_id", id);
    res.send(response);
  } catch (error) {
    res.send(error);
  }
});

// update a module
router.put("/modules/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const { module_name } = req.body;

    let response = await db("modules")
      .where("module_id", id)
      .update({ module_name });
    if (response === 1) {
      let result = await db.select("*").from("modules").where("module_id", id);
      res.json({ result });
    } else {
      res.send("could not retrieve the updated module");
    }
  } catch (error) {
    res.send({ error, message: "could not update module" });
  }
});

// delete a module
router.delete("/modules/:id", (req, res) => {
  const { id } = req.params;

  return db("modules")
    .where("module_id", id)
    .del()
    .then((response) => {
      db.select("*").from("modules");
      res.json({ response });
    });
});

module.exports = router;
