const asyncHandler = require("express-async-handler");
const Movie = require("../models/movieModel");
const User = require("../models/userModel");

// @desc    Get movies
// @route   GET /api/movies
// @access  Private
const getMovies = asyncHandler(async (req, res) => {
  const movies = await Movie.find({ user: req.user.id });
  res.status(200).json(movies);
});

// @desc    Add a movie
// @route   POST /api/movies
// @access  Private
const setMovie = asyncHandler(async (req, res) => {
  if (!req.body.name) {
    throw new Error("Please add a name");
  }
  const movie = await Movie.create({
    name: req.body.name,
    status: false,
    user: req.user.id,
  });
  res.status(200).json({ movie });
});

// @desc    Edit a movie
// @route   PUT /api/movies/:id
// @access  Private
const updateMovie = asyncHandler(async (req, res) => {
  const movie = await Movie.findById(req.params.id);

  if (!movie) {
    res.status(400);
    throw new Error("Movie not found");
  }

  const user = await User.findById(req.user.id);

  //Check for user
  if (!user) {
    res.status(401);
    throw new Error("User not found");
  }
  //Make sure the logged in user matches the movie user
  if (movie.user.toString() !== user.id) {
    res.status(401);
    throw new Error("User not authorized");
  }

  if (
    req.body.rating.length !== 0 &&
    (req.body.rating < 0 || req.body.rating > 5)
  ) {
    res.status(400);
    throw new Error("Please give rating score between 0-5");
  }

  const updatedMovie = await Movie.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.status(200).json(updateMovie);
});

// @desc    Delete a movie
// @route   DELETE /api/movies/:id
// @access  Private
const deleteMovie = asyncHandler(async (req, res) => {
  const movie = await Movie.findById(req.params.id);

  if (!movie) {
    res.status(400);
    throw new Error("Movie not found");
  }

  const user = await User.findById(req.user.id);
  //Check for user
  if (!user) {
    res.status(401);
    throw new Error("User not found");
  }
  //Make sure the logged in user matches the movie user
  if (movie.user.toString() !== user.id) {
    res.status(401);
    throw new Error("User not authorized");
  }

  await movie.remove();

  res.status(200).json({ id: req.params.id });
});

module.exports = {
  getMovies,
  setMovie,
  updateMovie,
  deleteMovie,
};
