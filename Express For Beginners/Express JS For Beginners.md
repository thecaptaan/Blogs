### PreRequisites

- Basic of Node JS (JavaScript)
- Familiarity with Command Line
- Node installed on linux os

## What is express js?

Express JS defined by their official website as:- _"It is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications."_

## Why Choose Express JS over Other Frameworks?

- Minimal and UnOpinionated
- Middleware Support
- Widely Adopted
- Large Ecosystem
- Active Community

### Basic Setup

Create a project folder and initiate node project and create `server.js` file in that folder.

```bash
mkdir demo && cd demo
npm init -y
touch server.js #create server.js file
```

Install _Express_ & _Nodemon_ packages express for web server and nodemon for reloading the server after each update. so we don't have to start server
manually.

```bash
npm i express nodemon
```

Change `scripts` in `package.json`. It will help to reload the server whenever we make changes in file.

```json
...
"scripts":{
    "dev" : "nodemon server.js"
},
...
```

![package.json screenshot](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/6fz1rxewna3w4dsyg09v.png)

This is the basic code for the running server that return **Hello World!** as response on **GET: /**

`server.js`

```javascript
"use strict";
const express = require("express");
const server = express();
const PORT = 8080;

server.get("/", (req, res) => {
  res.send("Hello World!");
});
server.listen(PORT, () => {
  console.log(`On => http://localhost:${PORT}`);
});
```

To run the sever run the following command on terminal.

```bash
npm run dev
# On => http://localhost:8080
```

Open Browser and type `localhost:8080`. _Hello World!_ will appear on browser.
![Browser Screenshot showing Hello World! on localhost:8080](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/cd288tfrrjwsfw2e61v0.png)

## Handle Get Route

Creating separate folder and javascript files to handle request like `GET`, `POST`, `PUT` & `DELETE`.

```bash
mkdir -p src/routes src/controllers src/views
touch src/routes/route.js
touch src/controllers/postTodo.js
touch src/views/index.html
```

Download `index.html` or paste the html code from [here](https://github.com/thecaptaan/Blogs/blob/main/Express%20For%20Beginners/src/views/index.html)

`route.js`

```javascript
const routeHandler = require("express").Router();

routeHandler.get("/todo", (req, res, next) => {
  res.sendFile("./index.html", {
    root: __dirname + "/../views",
  });
});

module.exports = routeHandler;
```

`Router()` method called from express js.`routeHandler` variable now represents an instance of the Express Router, which can be used to define routes and middleware specific to that router. `req`, `res` & `next` parameters are provided by express js to checking request, server response to that request & passing to control to other function, respectively. exporting that as a middleware to the server.

edit `server.js`

```javascript
const route = require('./src/routes/route');
server.use(route);
```

These are some different methods to send response to any request.

```javascript
// To serve json
res.json({
  success: true,
  message: "Server is working fine",
});
```

```javascript
// to send text
res.send("Send some text here");
```

```javascript
// redirect to any other page
res.redirect('/)
```

```javascript
// don't want to send any response
res.end();
```

## Handle Post Route

The urlencoded middleware is used to parse incoming request bodies with URL-encoded payloads and extended: true help in transforming into json

edit `server.js`

```javascript
...
const server = express()

// this will help server to parse json request
server.use(express.json())
server.use(express.urlencoded({ extended: true }));
...
```

`postTodo.js`

```javascript
"use strict";
const postTodo = require("express").Router();

postTodo.post("/todo", (req, res, next) => {
  const data = req.body;
  // validate data
  // save in the data base
  // send res.json({}) data saved successfully
  res.json(req.body);
});

module.exports = postTodo;
```

`req.body` contain all data that have been sended to the server.

`edit server.js`

```javascript
...
const postTodo = require('./src/controller/postTodo')
server.use(postTodo)
...
```

## Handle PUT & DELETE

Similarly, like GET & POST, we will handle PUT & DELETE.

controllers/`updateTodo.js` handling `PUT` request.

```javascript
"use strict";
const updateTodo = require("express").Router();
updateTodo.put("/todo", (req, res, next) => {
  // validate the data
  // fetch and update the data
  // return res.json({}) that data has been updated
});
module.exports = updateTodo;
```

controllers/`deleteTodo.js` handling `DELETE` request.

```javascript
"use strict";
const deleteTodo = require("express").Router();
deleteTodo.delete("/todo", (req, res, next) => {
  // validate the data
  // fetch and delete the data
  // return res.json({}) that data has been deleted
});
module.exports = deleteTodo;
```

## Adding Middleware

Middleware is useful library that help us to add some common functionality that we have to need on every web server.
Some popular express js middleware are `helmet`, `body-parser`, `cookie-parser`, `jsonwebtoken` & many more.

```bash
npm i <package_name>
```

update `server.js`

```javascript
...
const packageName = require('packageName')
// check the docs for implementation for that library.
server.use(packageName())
...
```

## Handling 404

Add this code after all `routes` methods are handled. Because it will block all request and respond that You Lost.

```javascript
server.use((req, res, next) => {
  res.send("You Lost");
});
```

You can check out [https://expressjs.com/](https://expressjs.com/) for more information.
### Code

You can download the complete code [here](https://github.com/thecaptaan/Blogs/tree/main/Express%20For%20Beginners).
