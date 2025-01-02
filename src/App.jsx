import React, { useEffect, useState } from "react";
const API_URL = "http://www.omdbapi.com/?apikey=c2eaca1e";
import "./App.css";

import SearchCard from "./SearchCard";
import MovieCard from "./MovieCard";

const App = () => {
  const [movie, setMovie] = useState([]);

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    let data = await response.json();
    if (data.Search) {
      setMovie(data.Search);
    }
  };

  useEffect(() => {
    searchMovies("SuperMan");
  }, []);

  const [inputValu, setInputValu] = useState("");

  return (
    <div className="app">
      <h1>Movie Land</h1>
      <SearchCard
        value={inputValu}
        setValue={setInputValu}
        handleSearch={() => searchMovies(inputValu)}
      />
      {movie.length > 0 ? (
        <div className="container">
          {movie.map((movieItem) => (
            <MovieCard key={movieItem.imdbID} movie={movieItem} />
          ))}
        </div>
      ) : (
        <div className="empty">No Movies to show</div>
      )}
    </div>
  );
};

export default App;
