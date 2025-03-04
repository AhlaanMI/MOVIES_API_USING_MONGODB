const mongoose = require("mongoose");

const editMovie = async (req, res) => {
  const moviesModel = mongoose.model("movies");

  const { movie_id, movie_name, rating, info, description } = req.body;

  if (!movie_id) throw "Movie ID is required";

  await moviesModel.updateOne(
    {
      _id: movie_id,
    },
    {
      movie_name: movie_name,
      rating: rating,
      info: info,
      description: description,
    },
    {
      runValidators: true,
    }
  );

  res.status(200).json({
    status: "Success",
    meggage: "Movie edited successfully",
  });
};

module.exports = editMovie;
