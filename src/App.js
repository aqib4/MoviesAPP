import { useState, useEffect } from "react";

import Moviescard from "./Moviescard.jsx";
import "./App.css";
import SearchIcon from "./SearchIcon.svg";

const API_URL = "https://www.omdbapi.com/?apikey=dc0ef29c";

const App = () => {
  const [movies, setmovies] = useState([]);
  const [searchitem, setSearchItem] = useState("");

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    setmovies(data.Search);
  };
  useEffect(() => {
    // Call searchMovies with a default term (e.g., 'Avengers') when the app loads
    searchMovies("Avengers");
  }, []);
  return (
    <div className="app">
      <h1>Land Of Movies</h1>
      <div className="search">
        <input
          type="text"
          value={searchitem}
          placeholder="Search Your Favourite Movies"
          id="SearchBox"
          onChange={(e) => setSearchItem(e.target.value)}
        />
        <img
          src={SearchIcon}
          alt="search"
          onClick={(e) => {
            searchMovies(searchitem);
          }}
        />
      </div>
      {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            <Moviescard moviedata={movie} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>OOPS! No Movies Found.</h2>
        </div>
      )}
    </div>
  );
};

export default App;
