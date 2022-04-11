const express = require("express");
const router = express.Router();
const {
  getMovie,
  getMovies,
  setMovie,
  updateMovie,
  deleteMovie,
} = require("../controllers/movieController");
const { protect } = require("../middleware/authMiddleware");

router.route("/").get(protect, getMovies).post(protect, setMovie);
router
  .route("/:id")
  .get(protect, getMovie)
  .put(protect, updateMovie)
  .delete(protect, deleteMovie);

module.exports = router;
