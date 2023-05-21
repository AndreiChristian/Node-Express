const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
require("dotenv").config();

const username = process.env.MONGODB_USERNAME;
const password = process.env.MONGODB_PASSWORD;

const app = express();

const feedRoutes = require("./routes/feed.js");

app.use(bodyParser.json());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, PATCH, DELETE"
  );
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

app.use("/feed", feedRoutes);

app.use((error, req, res, next) => {
  console.log(error);
  const status = error.statusCode || 500;
  const message = error.message;

  res.status(status).json({ message: message });
});

mongoose

  .connect(
    `mongodb+srv://${username}:${password}@learningmern.nqcra7u.mongodb.net/messages?retryWrites=true&w=majority`
  )
  .then((result) => {
    console.log("Connected to MongoDB");
    app.listen(8080);
  })
  .catch((err) => console.log(err));
