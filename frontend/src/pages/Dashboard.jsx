import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { FaSearch } from "react-icons/fa";
import MovieForm from "../components/MovieForm";
import MovieItem from "../components/MovieItem";
import Spinner from "../components/Spinner";
import { getMovies, reset } from "../features/movies/movieSlice";

function Dashboard() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [sort, setSort] = useState("");
  const [searchText, setSearchText] = useState("");

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

    dispatch(getMovies("sort=" + sort));

    return () => {
      dispatch(reset());
    };
  }, [user, isError, message, sort]);

  if (isLoading) {
    return <Spinner />;
  }

  const searchMovie = () => {
    dispatch(getMovies("search=" + searchText));
    setSearchText("");
  };
  return (
    <>
      <section className="heading"></section>

      <MovieForm />
      <h1 className="watchlist-heading"> {user && user.name}'s Watchlist</h1>
      <section className="search">
        <div className="search-search">
          <label htmlFor="search"></label>
          <input
            value={searchText}
            type="text"
            placeholder="Search..."
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button className="searchButton" onClick={searchMovie}>
            <FaSearch />
          </button>
        </div>
        <div className="search-sort">
          <label htmlFor="sort">Sort by</label>
          <select
            id="sort"
            defaultValue={sort}
            onChange={(e) => setSort(e.target.value)}
          >
            <option value="createdAt">Added</option>
            <option value="name">Name</option>
            <option value="-status">Watched</option>
            <option value="status">Not Watched</option>
            <option value="rating">Rating</option>
          </select>
        </div>
      </section>

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
