const express = require("express");
const bodyParser = require("body-parser");
require("dotenv").config();

const propertiesHandler = require("./src/routes/properties");
const facilitiesHandler = require("./src/routes/facilities");
const registerHandler = require("./src/routes/register");
const authHandler = require("./src/routes/auth");

const app = express();

app.use(bodyParser.json());

app.use("/api", propertiesHandler);
app.use("/api", facilitiesHandler);
app.use("/register", registerHandler);
app.use("/auth", authHandler);

app.listen(8080);
