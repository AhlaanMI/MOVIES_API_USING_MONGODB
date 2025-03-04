const mongoose = require("mongoose");

const deleteMovie = async (req, res) => {
  const moviesModel = mongoose.model("movies");

  const movie_id = req.params.movie_id;

  const getMovie = await moviesModel.findOne({
    _id: movie_id,
  });

  try {
    if (!getMovie) throw "Movie not found";
  } catch (e) {
    res.status(400).json({
      status: "Failed",
      data: e,
    });
    return;
  }

  try {
    await moviesModel.deleteOne({
      _id: movie_id,
    });
  } catch (e) {
    res.status(400).json({
      status: "Failed to delete movie",
      data: e.message,
    });
  }
  res.status(200).json({
    status: "succuess",
    message: "Movie deleted successfully",
  });
};

module.exports = deleteMovie;
