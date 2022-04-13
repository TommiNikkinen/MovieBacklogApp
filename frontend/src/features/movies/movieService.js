//HTTP REQUESTS
import axios from "axios";

const API_URL = "api/movies/";

//Add a new movie
const createMovie = async (movieData, token) => {
  console.log("post", token);
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  console.log(config);
  const response = await axios.post(API_URL, movieData, config);

  return response.data;
};

//Get user movies
const getMovies = async (query, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  if (query !== "") {
    query = "?" + query;
  }
  const response = await axios.get(API_URL + query, config);

  return response.data;
};

//Get a movie data
const getMovie = async (movieId, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.get(API_URL + movieId, config);

  return response.data;
};

//Edit movie data

const putMovie = async (movieData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.put(
    API_URL + movieData._id,
    {
      ...movieData,
    },
    config
  );

  return response.data;
};

//Delete user movie
const deleteMovie = async (movieId, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.delete(API_URL + movieId, config);

  return response.data;
};

const movieService = {
  createMovie,
  getMovies,
  getMovie,
  putMovie,
  deleteMovie,
};

export default movieService;
