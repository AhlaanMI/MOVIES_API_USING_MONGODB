const experss = require("express");
const addMovie = require("./controllers/addMovies");

const app = experss();

//routes

app.post("/api/movies", addMovie);

app.listen(8000, () => {
  console.log("Server is running on port 8000");
});
