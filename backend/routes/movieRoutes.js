const express = require("express");
const router = express.Router();
const {
  getMovies,
  setMovie,
  updateMovie,
  deleteMovie,
} = require("../controllers/movieController");

router.route("/").get(getMovies).post(setMovie);
router.route("/:id").put(updateMovie).delete(deleteMovie);

module.exports = router;
