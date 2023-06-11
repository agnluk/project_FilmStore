import {useState, useEffect} from 'react';
import './styles/App.css';
import SearchIcon from './img/search.svg';
import FilmCard from './components/filmCard';

const API_URL = 'http://www.omdbapi.com/?i=tt3896198&apikey=5856a06';

const App = () => {

    const [films, setFilms] = useState([]);
    const [searchTerm, setSearchTerm] = useState([]);

const searchMovies = async(title) => {
    const response = await fetch(`${API_URL}&s=${title}`)
    const data = await response.json();

    setFilms(data.Search)
}
useEffect(() => {
searchMovies('spiderman')
}, []);

    return (
        <div className='app'>
        <h1>FilmBase</h1>

        <div className='search'>
        <input 
        placeholder="search for movies"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        />
        <img
        src={SearchIcon}
        alt="search"
        onClick={() => searchMovies(searchTerm)}
        />
      </div>

        {
        films?.length > 0
        ? (
        <div className='container'>
        {films.map((film) => (
            <FilmCard film = {film}/>
        ))}
        </div>
    ) : (
        <div className='empty'>
        <h2>No movies found</h2>
        </div>
        ) 
        }
        </div>
    );
}

export default App;
