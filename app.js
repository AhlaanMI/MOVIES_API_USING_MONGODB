const experss = require("express");
const addMovie = require("./controllers/addMovies");
require("dotenv").config();

const app = experss();

app.use(experss.json());

const mongoose = require("mongoose");

//connection to mongodb

mongoose
  .connect(process.env.mongo_connection, {})
  .then(() => {
    console.log("Connected to mongodb database");
  })
  .catch(() => {
    console.log("Connection to mongodb failed");
  });

require("./models/movies.models");

//routes

app.post("/api/movies", addMovie);

app.listen(8000, () => {
  console.log("Server is running on port 8000");
});
