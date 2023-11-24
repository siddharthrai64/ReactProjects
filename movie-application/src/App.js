import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MovieList from "./components/MovieList";
import MovieListHeading from "./components/MovieListHeading";
import SearchBox from "./components/SearchBox";

function App() {
    const [movies, setMovies] = useState([]);
    const [searchValue, setSearchValue] = useState('');
    const [favouriteMovies, setFavouriteMovies] = useState(JSON.parse(localStorage.getItem('favouriteMovies')).length > 0 ? JSON.parse(localStorage.getItem('favouriteMovies')) : []);
    

    const addFavouriteMovieHandler = (movie) => {
        const newFavouriteMovie = [movie, ...favouriteMovies];
        
        setFavouriteMovies(newFavouriteMovie);
        saveToLocalStorage(newFavouriteMovie);
      }
    const removeFavouriteMovieHandler = (movie) => {
      const newFavouriteMovies = favouriteMovies.filter(
        (favouriteMovie) => favouriteMovie.imdbID !== movie.imdbID
      );
      
      setFavouriteMovies(newFavouriteMovies);
      saveToLocalStorage(newFavouriteMovies);
    }

    const saveToLocalStorage = (items) => {
      localStorage.setItem('favouriteMovies', JSON.stringify(items));
    } 
    

    const getMovieRequest = async (searchValue) => {
      const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=e8878049`;
      const res = await fetch(url);
      const responseJson = await res.json();

      if (responseJson.Search) {
        setMovies(responseJson.Search);
      }
    }

    useEffect(() => {
      getMovieRequest(searchValue);
    }, [searchValue]);

    return (
        <div className="App">
            <div className="container-fluid movie-app">
                <div className="row d-flex align-items-center mt-4 mb-4">
                  <MovieListHeading heading='Movies' />
                  <SearchBox searchValue = {searchValue} setSearchValue={setSearchValue} />
                </div>
                <div className="row d-flex">
                  <MovieList movies={movies} favouriteMovieHandler={addFavouriteMovieHandler} buttonName='Add to Favourite'/>
                </div>
                <div className="row d-flex align-items-center mt-4 mb-4">
                  <MovieListHeading heading='Favourites' />
                </div>
                
                <div className="row d-flex">
                  <MovieList movies={favouriteMovies} favouriteMovieHandler={removeFavouriteMovieHandler} buttonName='Remove'/>
                </div>
            </div>
            </div>
        
    );
}

export default App;
