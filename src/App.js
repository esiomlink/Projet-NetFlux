import { useState } from 'react';
import './App.css';
import FormAddMovies from './component/FormAddMovies';
import Header from './component/Header';
import MoviesListe from './component/MoviesListe';

function App() {
    const [movies, setmovies] = useState('');
  return (
    <div className='App'>
      <Header/>
      <MoviesListe movies={movies} setmovies={setmovies} />
      <FormAddMovies movies={movies} setmovies={setmovies} />
    </div>
  );
}

export default App;
