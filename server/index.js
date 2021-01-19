const express = require("express");
require("dotenv").config();

const app = express();
const port = process.env.API_PORT;

app.get("/", async (req, res) => {
  const response = await req;
  res.send("working");
});

app.listen(port, () => {
  console.log(`App is up and running on port: ${port}`);
});
