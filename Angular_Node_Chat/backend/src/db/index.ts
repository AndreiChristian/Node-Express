import { Pool } from "pg";
import dotenv from "dotenv";
dotenv.config();

const { DBUSER, DBHOST, DBPORT, DBNAME, DBPASSWORD } = process.env;

console.table({ DBHOST, DBUSER, DBPORT, DBNAME, DBPASSWORD });

const pool = new Pool({
  user: DBUSER,
  host: DBHOST,
  database: DBNAME,
  password: DBPASSWORD,
  port: +DBPORT!,
});

export const db = {
  query: (text: string, params: any[]) => pool.query(text, params),
};
