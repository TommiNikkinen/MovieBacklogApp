import { useState } from "react";
import { useDispatch } from "react-redux";
import { createMovie } from "../features/movies/movieSlice";

function MovieForm() {
  const [name, setName] = useState("");
  const dispatch = useDispatch();

  const onSubmit = (e) => {
    e.preventDefault();

    dispatch(createMovie({ name }));
    setName("");
  };
  return (
    <section className="form">
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label htmlFor="name">Add a new movie</label>
          <input
            type="text"
            name="name"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <button className="btn btn-block" type="submit">
            Add a movie
          </button>
        </div>
      </form>
    </section>
  );
}

export default MovieForm;
