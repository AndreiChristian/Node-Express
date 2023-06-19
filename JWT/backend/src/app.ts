import express, { NextFunction, Request, Response } from "express";
import { RequestHandler } from "express-serve-static-core";
import { config } from "dotenv";
import mongoose from "mongoose";

config();

const app = express();

import authRouter from "./routes/authRoutes";

app.use((req: Request, res: Response, next: NextFunction) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.use(express.json() as RequestHandler);

app.use("/api", authRouter);

mongoose
  .connect(process.env.DBURL || "")
  .then((result) => {
    app.listen(3000, () => {
      console.log("Connected to the db and started app on port 3000");
    });
  })
  .catch((err) => {
    console.error(err);
  });
