const { Pool } = require("pg");
require("dotenv").config();

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

const testDB = async () => {
  const client = await pool.connect();
  const response = await client.query("SELECT NOW() as current_time");
  console.log("response", response.rows);
  client.release();
};

testDB();

module.exports = pool;
