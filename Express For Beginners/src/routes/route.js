"use strict";
const routeHandler = require("express").Router();

routeHandler.get("/todo", (req, res) => {
  res.sendFile("./index.html", {
    root: __dirname + "/../views",
  });
});

module.exports = routeHandler;
