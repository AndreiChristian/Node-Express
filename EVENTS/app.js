const express = require("express");
const bodyParser = require("body-parser");
require("dotenv").config();

const propertiesHandler = require("./src/routes/properties");
const facilitiesHandler = require("./src/routes/facilities");

const app = express();

app.use(bodyParser.json());

app.use("/api", propertiesHandler);
app.use("/api", facilitiesHandler);

app.listen(8080);
