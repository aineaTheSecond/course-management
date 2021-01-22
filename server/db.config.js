const knex = require("knex");

const db = knex({
  client: "pg",
  connection: {
    host: "127.0.0.1",
    user: "ainea",
    password: "5432",
    database: "course-manager",
  },
});

module.exports = db;
