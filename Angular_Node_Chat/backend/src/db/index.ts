import { Pool } from "pg";

const pool = new Pool({
  user: "dbuser",
  host: "database.server.com",
  database: "mydb",
  password: "secretpassword",
  port: 3211,
});

export const query = (text: string, params: any[]) => pool.query(text, params);
