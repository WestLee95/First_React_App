import { useState, useEffect } from 'react';
import './App.css';
import searchIcon from './search.svg';
import MovieCard from './MovieCard';

// 3bf4b5c3 - API KEY

const API_KEY = 'http://www.omdbapi.com/?apikey=3bf4b5c3';

const movie1 = {
  "Title": "Avengers: Endgame",
  "Year": "2019",
  "imdbID": "tt4154796",
  "Type": "movie",
  "Poster": "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg"

}

const App = () => {

  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const searchMovies = async (title) => {
    const response = await fetch(`${API_KEY}&s=${title}`);
    const data = await response.json();
    setMovies(data.Search);
  };

  useEffect(() => {
    searchMovies('Avengers');
    //fetch(API_KEY)
    //  .then(response => response.json())
      //.then(data => console.log(data));
  }, []);

  return (
    <div className='app'>
      <h1>MovieTime</h1>

      <div className='Search'>
        <input 
          placeholder='Search for movies'
          value={searchTerm} 
          onChange={(e) => setSearchTerm(e.target.value)} 
        />
        <img src={searchIcon} alt="search"
          onClick={() => searchMovies(searchTerm)} />
      </div>

    {
      movies?.length > 0
        ? (
           <div className='container'>
            {movies.map((movie) => (
              <MovieCard movie={movie} />
            ))}
           </div>
          ) : (
            <div>
              <h2>No Movies Found</h2>
            </div>
          )
    }

      

    </div>
  );
}

export default App;
