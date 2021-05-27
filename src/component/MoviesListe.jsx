import {  useEffect } from 'react';
import { getAllMovies } from '../api/API';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import '../App.css';


const MoviesListe = ({movies, setmovies}) => {

  useEffect(() => {
    getAllMovies().then((res) => setmovies(res));
  });
 const responsive = {
    0: { items: 1 },
    900: {items: 4 },
    1024: { items: 5 },
    1200: {items: 6 },
    1600: {items: 8},
    1800: {items: 9},
    2000: {items: 10},
    2200: {items: 11},
    2400: {items: 12},
    2600: {items: 13},
    2750: {items: 14},
    2900: {items: 15}
  }
  return (
    <div className='movis-list'>
      <h1>movies</h1>
      <AliceCarousel
        duration={50}
        infinite={true}
        animationDurationn={1000}
        keyboardNavigation={true}
        autoPlayStrategy
        nimationType='slide'
        mouseTracking={true}
        playButtonEnabled
        responsive={responsive}
        autoPlay
        fadeOutAnimation
        mouseDragEnabled
        autoPlayInterval={3000}
      >
        {movies &&
          movies.map((movie) => (
            <img alt='pic' width='200px' height='250px' src={movie.img} />
          ))}
      </AliceCarousel>
    </div>
  );
};

export default MoviesListe;
