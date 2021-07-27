import {  useContext } from 'react';
import UserContext from '../contexts/UserContext';
import { Link } from 'react-router-dom';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import '../App.css';


const MoviesListe = ({ filtredMovie, categoryName }) => {
  const responsive = {
    0: { items: 1 },
    900: { items: 4 },
    1024: { items: 5 },
    1200: { items: 6 },
    1600: { items: 8 },
    1800: { items: 9 },
    2000: { items: 10 },
    2200: { items: 11 },
    2400: { items: 12 },
    2600: { items: 13 },
    2750: { items: 14 },
    2900: { items: 15 },
  };
  return (
    <div className='movis-list'>
      <h1>{categoryName}</h1>
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
        {filtredMovie &&
          filtredMovie.map((movie) => (
            <Link to={`/movie/${movie.id}`} label='login'>
              <img
                className='image-carousel'
                key='pic'
                alt='pic'
                src={movie.img}
              />
            </Link>
          ))}
      </AliceCarousel>
    </div>
  );
};

export default MoviesListe;
