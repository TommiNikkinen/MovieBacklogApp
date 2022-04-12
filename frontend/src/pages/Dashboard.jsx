import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import MovieForm from "../components/MovieForm";
import MovieItem from "../components/MovieItem";
import Spinner from "../components/Spinner";
import { getMovies, reset } from "../features/movies/movieSlice";

function Dashboard() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const { movies, isLoading, isError, message } = useSelector(
    (state) => state.movies
  );

  useEffect(() => {
    if (isError) {
      console.log(message);
    }

    if (!user) {
      navigate("/login");
    }

    dispatch(getMovies());

    return () => {
      dispatch(reset());
    };
  }, [user, isError, message]);

  if (isLoading) {
    return <Spinner />;
  }
  return (
    <>
      <div className="hero-image"></div>
      <section className="heading"></section>

      <MovieForm />
      <h1 className="watchlist-heading"> {user && user.name}'s Watchlist</h1>
      <section className="content">
        {movies.length > 0 ? (
          <div className="movies">
            {movies.map((movie) => (
              <MovieItem key={movie._id} movie={movie} />
            ))}
          </div>
        ) : (
          <h3>You have not added any movies</h3>
        )}
      </section>
    </>
  );
}

export default Dashboard;
