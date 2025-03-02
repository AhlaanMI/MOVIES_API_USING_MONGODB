const { info } = require("console");
const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema({
  movie_name: {
    type: String,
  },
  info: {
    type: String,
  },
  rating: {
    type: Number,
  },
});

const moviesModel = mongoose.model("movies", movieSchema);

module.exports = moviesModel;
