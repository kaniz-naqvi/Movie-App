import React, { useEffect, useState } from "react";
const API_URL = "https://www.omdbapi.com/?apikey=c2eaca1e";
import "./app.css";
import searchIcon from "./search.svg";
import MovieCard from "./MovieCard";

const App = () => {
  const [movie, setMovie] = useState([]);

  const searchMovies = async (title) => {
    try {
      const response = await fetch(
        `https://www.omdbapi.com/?apikey=c2eaca1e&s=${title}`
      );
      const data = await response.json();

      if (response.ok && data.Search) {
        setMovie(data.Search.slice(0, 9));
      } else {
        console.error("No search results or API limit reached:", data);
        setMovie([]);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
      setMovie([]);
    }
  };

  useEffect(() => {
    searchMovies("harry");
  }, []);

  const [inputValu, setInputValu] = useState("");

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      searchMovies(inputValu);
    }
  };

  return (
    <div className="app">
      <h1>Movie Land</h1>
      <div className="search">
        <input
          value={inputValu}
          onChange={(e) => {
            setInputValu(e.target.value);
          }}
          type="text"
          placeholder="Search for movies"
          onKeyDown={handleKeyDown}
        />

        <img
          src={searchIcon}
          onClick={() => searchMovies(inputValu)}
          alt="Search"
        />
      </div>
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
