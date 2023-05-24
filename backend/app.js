// DEPENDENCIES
const cors = require("cors");
const express = require("express");

// CONFIGURATION
const app = express();

// MIDDLEWARE
app.use(cors());
app.use(express.json());

const badgesController = require("./controllers/badgesController.js");
const JASUsersBadgesController = require("./controllers/JASUsersBadgesController.js");
const themesController = require("./controllers/themesController.js");
const usersController = require("./controllers/usersController.js")

app.use("/badges", badgesController);
app.use("/JASUsersBadges", JASUsersBadgesController);
app.use("/themes", themesController);
app.use("/users", usersController)

// ROUTES
app.get("/", (req, res) => {
  res.send("Cubic Zirconia Back End");
});

// 404 PAGE
app.get("*", (req, res) => {
  res.status(404).send("Back End Page not found");
});
// EXPORT
module.exports = app;