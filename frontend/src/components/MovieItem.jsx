import { useDispatch } from "react-redux";
import { deleteMovie, getMovie } from "../features/movies/movieSlice";
import { Link } from "react-router-dom";

function MovieItem({ movie }) {
  const dispatch = useDispatch();
  const dateOptions = { year: "numeric", month: "numeric", day: "numeric" };

  return (
    <div className="movie">
      <div className="movie-link">
        <Link to={`/${movie._id}`} state={{ movie }}>
          <h2>{movie.name}</h2>
        </Link>
      </div>

      <div className="movie-info">
        <div>
          Added:{" "}
          {new Date(movie.createdAt).toLocaleString("en-GB", dateOptions)}
        </div>
        <div>{movie.status ? "Watched" : "Not watched"}</div>
        <div>Rating: {movie.rating}</div>
      </div>

      <button
        onClick={() => dispatch(deleteMovie(movie._id))}
        className="close"
      >
        X
      </button>
    </div>
  );
}

export default MovieItem;
