const mongoose = require("mongoose");

const addMovie = async (req, res) => {
  const moviesModel = mongoose.model("movies");

  const { movie_name, info, rating, Description } = req.body;

  //validations...

  //approach 1 - this one is better chat gpt said

  // if (!movie_name || !info || !rating) {
  //   return res.status(400).json({
  //     status: "failed",
  //     message: "Please provide all the required fields",
  //   });
  // }

  // if (rating > 10 || rating < 0) {
  //   return res.status(400).json({
  //     status: "failed",
  //     message: "Rating should be between 0 and 10",
  //   });
  // }

  //approach 2
  // using try catch block to handle the error & exceptions

  //if (!movie_name) throw "Movie name is required";
  if (!info) throw "Movie info is required";
  if (!rating) throw "Movie rating is required";
  if (rating > 10 || rating < 0) throw "Rating should be between 0 and 10";

  //success response

  const createMovie = await moviesModel.create({
    movie_name: movie_name,
    info: info,
    rating: rating,
    Description: Description,
  });

  //console.log(createMovie);

  res.status(200).json({
    status: "success",
    message: "Movie added successfully",
  });
};

module.exports = addMovie;
