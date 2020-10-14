# runner-leaderboard
This is a boilerplate to build a full stack web application using React, Node.js and Express. It is also configured with eslint, mocha and cors.

## Introduction

This is a simple full stack [React](https://reactjs.org/) application with a [Node.js](https://nodejs.org/en/) and [Express](https://expressjs.com/) backend. Client side code is written in React and the backend API is written using Express.

### Development mode

In the development mode, we will have 2 servers running. The front end code will be served by the react script start which helps with hot and live reloading. The server side Express code will be served by a node server using [nodemon](https://nodemon.io/) which helps in automatically restarting the server whenever server side code changes.

## Quick Start

```bash
# Clone the repository
git clone https://github.com/furkankahvecii/runner-leaderboard

# Go inside the directory
cd runner-leaderboard

# Install dependencies
npm install

#  Go inside the front directory
cd front

# Install dependencies
npm install

# Start front
npm start

# One step back
cd..

# Start backend server
npm run devStart
```


## Documentation

### Folder Structure

Inside front, there is client directory. All the frontend code (react, css and any other assets) will be in front directory. Backend Node.js/Express code will be in the server.js file.

### ESLint

[ESLint](https://eslint.org/) is a pluggable and configurable linter tool for identifying and reporting on patterns in JavaScript.

[.eslintrc.json file](<(https://eslint.org/docs/user-guide/configuring)>) (alternatively configurations can we written in Javascript or YAML as well) is used describe the configurations required for ESLint. Below is the .eslintrc.json file which I am using.

```javascript
{
  "extends": ["airbnb"],
  "env": {
    "browser": true,
    "node": true
  },
  "rules": {
    "no-console": "off",
    "comma-dangle": "off",
    "react/jsx-filename-extension": "off"
  }
}
```

### Nodemon

Nodemon is a utility that will monitor for any changes in the server source code and it automatically restart the server. This is used in development only.

### Mocha

Mocha is a feature-rich JavaScript test framework running on Node.js and in the browser, making asynchronous testing simple and fun.

```javascript
npm test
```
### Express

Express is a web application framework for Node.js. It is used to build our backend API's.

./server.js is the entry point to the server application. Below is the server.js file

```javascript
const express = require("express");
const cors = require('cors')

const app = express();

//Parse URL-encoded bodies
app.use(express.urlencoded({extended:true})); 

//Used to parse JSON bodies
app.use(express.json()); 

app.use(cors())

app.listen(4000 , () => console.log("Server started"))
```

This starts a server and listens on port 4000 for connections.
