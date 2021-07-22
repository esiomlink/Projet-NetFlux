import '../App.css';
import { useContext } from 'react';
import UserContext from '../contexts/UserContext';
import MoviesListe from '../component/MoviesListe';



const Home = () => {
  const { movies, category, isConnected, myFavorit } = useContext(UserContext);


  return (
    <div>
      {isConnected && (
        <MoviesListe filtredMovie={myFavorit} categoryName='FAVORIS' />
      )}
      {movies &&
        category.map((cat) => {
          const filtredMovie = movies.filter(
            (mov) => mov.category_id === cat.id
          );
          return (
            <MoviesListe filtredMovie={filtredMovie} categoryName={cat.name.toUpperCase()} />
          );
        })}
    </div>
  );
};

export default Home;
