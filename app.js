const experss = require("express");
const addMovie = require("./controllers/addMovies");

const app = experss();

const mongoose = require("mongoose");

//connection to mongodb

mongoose
  .connect(
    "mongodb+srv://loonslab:loonslab@moviedb.7jrmv.mongodb.net/?retryWrites=true&w=majority&appName=MovieDB",
    {}
  )
  .then(() => {
    console.log("Connected to mongodb database");
  })
  .catch(() => {
    console.log("Connection to mongodb failed");
  });

//routes

app.post("/api/movies", addMovie);

app.listen(8000, () => {
  console.log("Server is running on port 8000");
});
