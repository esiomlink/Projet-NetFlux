import { useContext } from 'react';
import '../App.css';
import UserContext from '../contexts/UserContext';
import MoviesListe from '../component/MoviesListe';
import FormAddMovies from '../component/FormAddMovies';

const Home = () => {
  const {isConnected} = useContext(UserContext);


  return (
    <div>
      <MoviesListe />
      {isConnected&&<FormAddMovies
      />}
    </div>
  );
};

export default Home;
