import { useState, useEffect } from "react";
import { useNavigate, useLocation, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { editMovie, getMovie, reset } from "../features/movies/movieSlice";
import { FaStar, FaRegCommentAlt } from "react-icons/fa";
import Spinner from "../components/Spinner";

function Movie() {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.auth);
  const { isLoading, isError, message } = useSelector((state) => state.movies);

  const ratingValues = [1, 2, 3, 4, 5];
  const [comments, setComments] = useState(location.state.movie.comments);
  const [rating, setRating] = useState(location.state.movie.rating);
  const [status, setStatus] = useState(location.state.movie.status);
  const [movieData, setMovieData] = useState(location.state.movie);

  useEffect(() => {
    if (isError) {
      console.log(message);
    }
    if (!user) {
      navigate("/login");
    }

    return () => {
      dispatch(reset());
    };
  }, [user, navigate, isError, message, dispatch]);

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(editMovie(movieData));
    navigate("/");
  };

  const checkState = () => {
    setMovieData((movieData) => ({
      ...movieData,
      status: status,
      comments: comments,
      rating: rating,
    }));
  };

  if (isLoading) {
    return <Spinner />;
  }
  return (
    <>
      <section className="heading">
        <p>{movieData.name}</p>
      </section>
      <section className="form">
        <form onSubmit={onSubmit}>
          <div className="form-group">
            <label htmlFor="comments">
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
          <div className="form-bottom">
            <div className="form-rating">
              Rating <FaStar />
              <div className="form-star">
                {ratingValues.map((rate) => (
                  <span key={rate}>
                    <label htmlFor={rate + " rating"}>{rate}</label>
                    <input
                      value={rate}
                      type="radio"
                      name="rating"
                      defaultChecked={true ? rate === rating : false}
                      onChange={(e) => setRating(e.target.value)}
                    />
                  </span>
                ))}
              </div>
            </div>
            <div className="form-status">
              <p>Watched</p>
              <label className="toggle">
                <input
                  type="checkbox"
                  className="form-control"
                  id="status"
                  name="status"
                  checked={status && "checked"}
                  value={status}
                  onChange={() => setStatus(!status)}
                />
                <span className="slider"></span>
                <span className="labels" data-on="YES" data-off="NO"></span>
              </label>
            </div>
          </div>
          <div className="form-group">
            <button
              type="submit"
              className="btn btn-block"
              onClick={checkState}
            >
              Submit
            </button>
          </div>
        </form>
      </section>
    </>
  );
}

export default Movie;
