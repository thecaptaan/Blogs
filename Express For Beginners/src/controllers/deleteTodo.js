"use strict";
const deleteTodo = require("express").Router();
deleteTodo.delete("/todo", (req, res, next) => {
  // validate the data
  // fetch and delete the data
  // return res.json({}) that data has been deleted
});
module.exports = deleteTodo;
