import { useState, useEffect } from 'react';
import './App.css';
import searchIcon from './search.svg';
import MovieCard from './MovieCard';

// Correct API URL format
const API_URL = 'https://www.omdbapi.com/?apikey=3bf4b5c3';

const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const searchMovies = async (title) => {
    setIsLoading(true);
    setError(null);
    
    try {
      const response = await fetch(`${API_URL}&s=${title}`);
      const data = await response.json();
      
      if (data.Response === "True") {
        setMovies(data.Search);
      } else {
        setMovies([]);
        setError(data.Error);
      }
    } catch (err) {
      setError('Failed to fetch movies');
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    searchMovies('Avengers');
  }, []);

  const handleSearch = () => {
    if (searchTerm.trim()) {
      searchMovies(searchTerm);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className='app'>
      <h1>MovieTime</h1>
      <div className='Search'>
        <input
          placeholder='Search for movies'
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onKeyPress={handleKeyPress}
        />
        <img 
          src={searchIcon} 
          alt="search" 
          onClick={handleSearch}
        />
      </div>

      {isLoading && <p>Loading...</p>}
      
      {error && <div><h2>{error}</h2></div>}
      
      {!isLoading && !error && movies?.length > 0 ? (
        <div className='container'>
          {movies.map((movie) => (
            <MovieCard key={movie.imdbID} movie={movie} />
          ))}
        </div>
      ) : (
        !isLoading && !error && (
          <div>
            <h2>No Movies Found</h2>
          </div>
        )
      )}
    </div>
  );
}

export default App;