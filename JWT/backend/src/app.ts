import express, { Request, Response } from "express";
import mongoose from "mongoose";

const app = express();

app.get("/", (req: Request, res: Response) => {
  res.json("Hello");
});

mongoose
  .connect(
    "mongodb://mongo:L2uB3h2FFSdP1h2TfqoR@containers-us-west-96.railway.app:5855"
  )
  .then((result) => {
    app.listen(3000, () => {
      console.log("Connected to the db and started app on port 3000");
    });
  })
  .catch((err) => {
    console.error(err);
  });

//   signup GET
//   login GET
//   logout GET

//   login POST
//   signup POST
