const { info } = require("console");
const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema({
  movie_name: {
    type: String,
    required: [true, "Movie name is required"],
  },
  info: {
    type: String,
  },
  rating: {
    type: Number,
  },
  Description: {
    type: String,
  },
});

const moviesModel = mongoose.model("movies", movieSchema);

module.exports = moviesModel;
