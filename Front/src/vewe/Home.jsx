import { useContext } from 'react';
import '../App.css';
import UserContext from '../contexts/UserContext';
import MoviesListe from '../component/MoviesListe';
import FormAddMovies from '../component/FormAddMovies';

const Home = () => {
  const { movies, isConnected, setmovies } = useContext(UserContext);


  return (
    <div>
      <MoviesListe movies={movies} setmovies={setmovies} />
      {isConnected&&<FormAddMovies
        movies={movies}
        setmovies={setmovies}
      />}
    </div>
  );
};

export default Home;
