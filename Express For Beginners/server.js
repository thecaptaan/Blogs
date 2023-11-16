"use strict"
const express = require('express');
const server = express();
const PORT = 8080;
server.use(express.json());
server.use(express.urlencoded({ extended: true }));
server.get("/", (req, res) => {
    res.send("Hello World!");
});

const route = require('./src/routes/route');
server.use(route);

const postTodo = require('./src/controllers/postTodo')
server.use(postTodo);
const updateTodo = require('./src/controllers/updateTodo')
server.use(updateTodo);
const deleteTodo = require('./src/controllers/deleteTodo')
server.use(deleteTodo);
// always add this code after all routes and controllers handlers
server.use((req, res, next) => {
    res.send("You Lost");
  });
server.listen(PORT, () => {
    console.log(`On => http://localhost:${PORT}`);
});