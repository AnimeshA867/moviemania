import React, { useEffect, useState } from "react";
import axios from "axios";
import PropTypes from "prop-types";
import Card from "./Card.js";
import Button from "react-bootstrap/Button";
const MovieList = (props) => {
  const [movies, setMovies] = useState([]);
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        console.log(props.apiKey);
        const response = await axios.get(
          "https://api.themoviedb.org/3/movie/popular",
          {
            params: {
              api_key: props.apiKey,
              language: "en-US",
              page: 2,
              pageSize: 3,
            },
          }
        );
        setMovies(response.data.results);
      } catch (error) {
        console.log("Error fetching movies: ", error);
      }
    };

    fetchMovies();
  }, []);

  // let fetchImages = async (url) => {
  //   let data = await fetch(url);
  //   let parsedData = await data.json;
  //   setImages(parsedData);
  // };
  console.log(movies);
  return (
    <>
      <div className="w-10/12 flex flex-wrap justify-center">
        {movies.map((movie) => {
          return (
            <>
              <Card
                poster_path={movie.poster_path}
                title={movie.title}
                overview={movie.overview}
              />
            </>
          );
        })}
      </div>
    </>
  );
};

export default MovieList;

MovieList.propsType = {
  apiKey: PropTypes.string,
};
