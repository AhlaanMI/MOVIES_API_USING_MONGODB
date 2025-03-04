const experss = require("express");
const mongoose = require("mongoose");
const editMovie = require("./controllers/editMovie");
const addMovie = require("./controllers/addMovies");
const getAllMovies = require("./controllers/getAllMovies");
const getSingleMovie = require("./controllers/getSingleMovie");
require("dotenv").config();

const app = experss();

app.use(experss.json());

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
app.get("/api/movies", getAllMovies);
app.get("/api/movies/:movie_id", getSingleMovie);
app.patch("/api/movies/", editMovie);

app.listen(8000, () => {
  console.log("Server is running on port 8000");
});
