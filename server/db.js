const { password, host, port, database } = require("pg/lib/defaults");

const { Pool } = require("pg");

// Define the constant with a different name
const pgPool = new Pool({
  user: "postgres",
  password: "1234",
  host: "localhost",
  port: 5432,
  database: "perntodo"
});

module.exports = pgPool;
