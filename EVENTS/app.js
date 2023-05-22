const express = require("express");
const bodyParser = require("body-parser");

const propertiesHandler = require("./src/routes/properties")

const app = express();

app.use(bodyParser.json());

app.use("/api",propertiesHandler)

app.listen(8080);
