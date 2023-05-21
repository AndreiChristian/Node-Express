const { Pool } = require("pg");

require("dotenv").config();

const pool = new Pool({
  user: process.env.PGUSER,
  host: process.env.PGHOST,
  database: process.env.PGDATABASE,
  password: process.env.PGPASSWORD,
  port: process.env.PGPORT,
});

const text =
  "INSERT INTO users(first_name, last_name ,email, adress_id) VALUES($1, $2, $3, $4) RETURNING *";
const values = ["andrei", "netoiu", "brian.m.carlson@gmail.com", 2];

// promise
pool
  .query(text, values)
  .then((res) => {
    console.table(res.rows);
    // { name: 'brianc', email: 'brian.m.carlson@gmail.com' }
  })
  .catch((e) => console.error(e.stack));

pool.end();
