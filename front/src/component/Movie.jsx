import { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router';
import { getMovie } from '../api/API';
import Card from 'react-bootstrap/Card';
import UserContext from '../contexts/UserContext';

const Movie = () => {
  const [movie, setmovie] = useState('');
  const { category } = useContext(UserContext);

  let { slug } = useParams();

  useEffect(() => {
    getMovie(slug).then((res) => setmovie(res));
  }, []);

  return (
    <div>
      <Card
        className='form-container'
        style={{
          background: 'rgb(34, 34, 34)',
          color: 'azure',
          borderColor: 'azure',
          margin: 'auto',
        }}
      >
        <Card.Header>
          <h1>{movie.title}</h1>
        </Card.Header>
        <Card.Body
          style={{
            background: 'rgb(34, 34, 34)',
            color: 'azure',
            borderColor: 'azure',
          }}
        >
          <h2>{movie.director}</h2>
          <p>{movie.year}</p>
        </Card.Body>
        <img src={movie.img} style={{ width: '40rem' }} alt='movie' />
      </Card>
    </div>
  );
};

export default Movie;
