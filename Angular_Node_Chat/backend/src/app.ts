import { NextFunction, Request, Response } from "express";

import express from "express";
import dotenv from "dotenv";
import { db } from "./db";

dotenv.config();

const port = process.env.PORT || 4000;

const app = express();

app.get("/", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { rows } = await db.query("SELECT NOW()", []);

    if (!rows[0]) {
      throw new Error("connecting to the db is wrong");
    }

    res.status(201).json(rows);
  } catch (err) {
    console.log(err);
  }
});

app.listen(port, () => {
  console.log(`Started the app on port ${port}`);
});
