const movieRecommendation = (req, res) => {
  res.status(200).json({
    message: "Recommendation is working",
  });
};

module.exports = movieRecommendation;
