const express = require('express');

const db = require('./data/dbConfig.js');
const RecipeRouter = require("./routes/recipe-router")
const server = express();

server.use(express.json());

server.use("/api/recipes", RecipeRouter)

module.exports = server;