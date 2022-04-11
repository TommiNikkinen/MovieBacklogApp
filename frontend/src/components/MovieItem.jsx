import { useDispatch } from "react-redux";
import { deleteMovie } from "../features/movies/movieSlice";
import { Link } from "react-router-dom";

function MovieItem({ movie }) {
  const dispatch = useDispatch();

  return (
    <div className="movie">
      <div>Added: {new Date(movie.createdAt).toLocaleString("en-US")}</div>
      <Link to={`/${movie._id}`}>{movie.name}</Link>
      <h2>{movie.name}</h2>
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
