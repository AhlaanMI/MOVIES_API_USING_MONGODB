const mongoose = require("mongoose");

const editMovie = async (req, res) => {
  const moviesModel = mongoose.model("movies");

  const { movie_id, movie_name, rating, info, description } = req.body;

  try {
    if (!movie_id) throw "Movie ID is required";
  } catch (e) {
    res.status(400).json({
      status: "Failed",
      data: e,
    });
    return;
  }

  try {
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
  } catch (e) {
    res.status(400).json({
      status: "Failed to edit movie",
      data: e.message,
    });
    return;
  }

  res.status(200).json({
    status: "Success",
    meggage: "Movie edited successfully",
  });
};

module.exports = editMovie;
