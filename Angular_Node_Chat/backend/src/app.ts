import { NextFunction, Request, Response } from "express";

import express from "express";
import dotenv from "dotenv";

dotenv.config();

const app = express();

app.get("/", (req: Request, res: Response, next: NextFunction) => {
  res.status(200).json("hello world");
});

app.listen(3000);
