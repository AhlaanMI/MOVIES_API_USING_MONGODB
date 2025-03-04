const experss = require("express");
const mongoose = require("mongoose");
const editMovie = require("./controllers/editMovie");
const addMovie = require("./controllers/addMovies");
const getAllMovies = require("./controllers/getAllMovies");
const getSingleMovie = require("./controllers/getSingleMovie");
const deleteMovie = require("./controllers/deleteMovie");
const movieRecommendation = require("./controllers/movieRecommendation");
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
app.delete("/api/movies/:movie_id", deleteMovie);

//open AI suggestions
app.get("/api/movies/openai/getRecommendations", movieRecommendation);

app.listen(8000, () => {
  console.log("Server is running on port 8000");
});
