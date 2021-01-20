const knex = require("knex");

const db = knex({
  client: "postgresql",
  connection: {
    user: "ainea",
    password: "5432",
    database: "course-manager",
  },
});

module.exports = db;
