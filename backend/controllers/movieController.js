// @desc    Get movies
// @route   GET /api/movies
// @access  Private
const getMovies = (req, res) => {
  res.status(200).json({ message: "Get movies" });
};

// @desc    Add a movie
// @route   POST /api/movies
// @access  Private
const setMovie = (req, res) => {
  res.status(200).json({ message: "Add a movie" });
};

// @desc    Edit a movie
// @route   PUT /api/movies/:id
// @access  Private
const updateMovie = (req, res) => {
  res.status(200).json({ message: `Edit movie ${req.params.id}` });
};

// @desc    Delete a movie
// @route   DELETE /api/movies/:id
// @access  Private
const deleteMovie = (req, res) => {
  res.status(200).json({ message: `Delete movie ${req.params.id}` });
};

module.exports = {
  getMovies,
  setMovie,
  updateMovie,
  deleteMovie,
};
