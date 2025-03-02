const addMovie = (req, res) => {
  console.log(req.body);

  const { movie_name, info, rating } = req.body;

  //validations...

  //success response
  res.status(200).json({
    status: "success",
    message: "Movie added successfully",
  });
};

module.exports = addMovie;
