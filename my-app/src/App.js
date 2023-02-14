import React from "react";
import { useEffect, useState } from "react";
import MovieCard from './MovieCard';
import "./App.css";
import SearchIcon from './search.svg';

//b744d5d0
const API_URL = 'http://www.omdbapi.com?apikey=b744d5d0';
// eslint-disable-next-line no-unused-vars
const movie1={

    "Title": "Italian Spiderman",
    "Year": "2007",
    "imdbID": "tt2705436",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BYjFhN2RjZTctMzA2Ni00NzE2LWJmYjMtNDAyYTllOTkyMmY3XkEyXkFqcGdeQXVyNTA0OTU0OTQ@._V1_SX300.jpg"
}
// const movie2 ={

//     "Title": "Spiderman",
//     "Year": "1990",
//     "imdbID": "tt0100669",
//     "Type": "movie",
//     "Poster": "N/A"

// }
const App = () => {
  const [movies, setmovie] = useState([]);
  const [searchterm,setsearchterm]= useState('');

  const Searchmovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    setmovie(data.Search);
  }
  useEffect(() => {
    Searchmovies('spiderman');

  }, []);
  return (
    <div className="app">
      <h1>MovieLand</h1>
      <div className="search">
        <input
          placeholder="search the movie"
          value={searchterm}
          onChange={(e) => setsearchterm(e.target.value)}
        />
        <img
          src={SearchIcon}
          alt="search"
          onClick={() => Searchmovies(searchterm)}
        />
      </div>
      {
        movies?.length > 0
          ? (
            <div className="container ">
              {movies.map((movies) => (
                <MovieCard movie={movies}/>
              ))}
            </div>
          )
          : (
            <div className="empty">
              <h2>No Movie Found</h2>
            </div>
          )
      }
    </div>
  );
}

export default App;