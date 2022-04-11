import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { editMovie, getMovie, reset } from "../features/movies/movieSlice";
import { FaStar, FaRegCommentAlt } from "react-icons/fa";
import Spinner from "../components/Spinner";

function Movie() {
  const params = useParams();

  const id = params.id;
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const { movies, isLoading, isError, message } = useSelector(
    (state) => state.movies
  );

  const ratings = [1, 2, 3, 4, 5];
  const [comments, setComments] = useState();
  const [rating, setRating] = useState();
  const [status, setStatus] = useState();
  const [movieData, setMovieData] = useState();

  useEffect(() => {
    if (isError) {
      console.log(message);
    }

    if (!user) {
      navigate("/login");
    }

    dispatch(getMovie(id));

    setStatus(movies.status);
    setComments(movies.comments);
    setRating(movies.rating);
    setMovieData(movies);

    return () => {
      dispatch(reset());
    };
  }, [user, navigate, isError, message, dispatch]);

  const onSubmit = (e) => {
    e.preventDefault();

    setMovieData({
      ...movieData,
      comments: comments,
      status: status,
      rating: rating,
    });
    dispatch(editMovie(movieData));
  };

  if (isLoading) {
    return <Spinner />;
  }
  return (
    <>
      <section className="heading">
        <p>{movies.name}</p>
      </section>
      <section className="form">
        <form onSubmit={onSubmit}>
          <div className="form-group">
            <p>Watched yes/no</p>
            <input
              type="checkbox"
              className="form-control"
              id="status"
              name="status"
              checked={status && "checked"}
              value={status}
              onChange={() => setStatus(!status)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="comments">
              {" "}
              Comments
              <FaRegCommentAlt />
            </label>
            <textarea
              className="form-control"
              id="comments"
              name="comments"
              value={comments}
              onChange={(e) => setComments(e.target.value)}
            />
          </div>
          <section>
            Rating <FaStar />
          </section>
          <div className="form-star">
            {ratings.map((rate) => (
              <span key={rate}>
                <label htmlFor={rate + " rating"}>{rate}</label>
                <input
                  value={rate}
                  type="radio"
                  name="rating"
                  onChange={(e) => setRating(e.target.value)}
                />
              </span>
            ))}
          </div>
          <div className="form-group">
            <button type="submit" className="btn btn-block">
              Submit
            </button>
          </div>
        </form>
      </section>
    </>
  );
}

export default Movie;
