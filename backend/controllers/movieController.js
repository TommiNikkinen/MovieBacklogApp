const asyncHandler = require("express-async-handler");
// @desc    Get movies
// @route   GET /api/movies
// @access  Private
const getMovies = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "Get movies" });
});

// @desc    Add a movie
// @route   POST /api/movies
// @access  Private
const setMovie = asyncHandler(async (req, res) => {
  console.log(req.body);
  if (!req.body.name) {
    throw new Error("Please add a name");
  }

  res.status(200).json({ message: "ok" });
});

// @desc    Edit a movie
// @route   PUT /api/movies/:id
// @access  Private
const updateMovie = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Edit movie ${req.params.id}` });
});

// @desc    Delete a movie
// @route   DELETE /api/movies/:id
// @access  Private
const deleteMovie = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Delete movie ${req.params.id}` });
});

module.exports = {
  getMovies,
  setMovie,
  updateMovie,
  deleteMovie,
};
