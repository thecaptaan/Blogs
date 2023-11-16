"use strict"
const updateTodo = require('express').Router();
updateTodo.put('/todo/:id', (req, res, next) => {
    // validate the data
  // fetch and update the data
  // return res.json({}) that data has been updated
})

module.exports = updateTodo;