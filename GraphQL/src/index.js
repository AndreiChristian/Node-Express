const express = require("express");
require("dotenv").config();
const { graphqlHTTP } = require("express-graphql");
const grahpqlSchema = require("./graphql/schema");
const grahpqlResolver = require("./graphql/resolver");

const app = express();

app.use(express.json());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, PATCH, DELETE"
  );
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

app.use(
  "/grahpql",
  graphqlHTTP({
    schema: grahpqlSchema,
    rootValue: grahpqlResolver,
  })
);

app.get("/", (req, res, next) => {
  res.json({ message: "Hello from Express GrahpQL" });
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Starting the app on port ${port}`);
});
