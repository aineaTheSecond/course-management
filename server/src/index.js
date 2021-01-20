const express = require("express");
const router = require("./routes");
const cors = require("cors");
const bodyParser = require("body-parser");
require("dotenv").config();

// constants
const app = express();
const port = process.env.API_PORT;

// middlewares

// parse json data from requests
app.use(bodyParser.json());
// parse data from urls
// app.use(bodyParser.urlencoded({ extended: false }));
app.use(router);

app.use(cors);

// listen
app.listen(port, () => {
  console.log(`App is up and running on port: ${port}`);
});
