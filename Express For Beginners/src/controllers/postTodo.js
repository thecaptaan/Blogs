"use strict";
const postTodo = require("express").Router();
postTodo.post("/todo", (req, res, next) => {
  // validate the data
  // fetch and update the data
  // return res.json({}) that data has been updated
  res.json(req.body);
});
module.exports = postTodo;
