const addMovie = (req, res) => {
  console.log(req.body);

  const { movie_name, info, rating } = req.body;

  //validations...
  if (!movie_name || !info || !rating) {
    return res.status(400).json({
      status: "failed",
      message: "Please provide all the required fields",
    });
  }

  if (rating > 10 || rating < 0) {
    return res.status(400).json({
      status: "failed",
      message: "Rating should be between 0 and 10",
    });
  }

  //success response
  res.status(200).json({
    status: "success",
    message: "Movie added successfully",
  });
};

module.exports = addMovie;
