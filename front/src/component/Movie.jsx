import { useEffect, useState, useContext } from 'react';
import Cookies from 'js-cookie';
import StarClickedSvg from '../img/svg/StarFavoriteClickedSvg';
import StarSvg from '../img/svg/StarFavoriteSvg';
import { useParams } from 'react-router';
import Card from 'react-bootstrap/Card';
import { useForm } from 'react-hook-form';
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import  {Container} from 'react-bootstrap'
import '../App.css';
import {
  getMovie,
  getComment,
  postComment,
  postFavorite,
  deleteFavorite,
  getAllUserFavorites,
} from '../api/API';
import UserContext from '../contexts/UserContext';

const Movie = () => {
  const [movie, setmovie] = useState('');
  const [comments, setComments] = useState('');
  const { register, handleSubmit, reset } = useForm();
  const [reloadComment, setReloadComment] = useState(false);
  const { favoritesId, setFavoritsId } = useContext(UserContext);
  const [isOpen, setIsOpen] = useState(false);
  let { slug } = useParams();

  const onSubmit = (values) => {
    postComment(values);
    setReloadComment(!reloadComment);
    reset();
  };
  const handleFavoriteClick = () => {
    setTimeout(() => {
      setIsOpen(!isOpen);
      getAllUserFavorites().then((favorit) => setFavoritsId(...favorit));
    }, 500);
  };

  function findFavorit() {
    if (favoritesId.find((el) => el.movies_id === movie.id)) {
      setIsOpen(true);
    } else setIsOpen(false);
  }

  const handleFavoriteSubmit = (e) => {
    const addFavoriteProduct = {
      users_id: Cookies.get('id'),
      movies_id: movie.id,
    };
    e.preventDefault();
    if (isOpen === true) {
      deleteFavorite(movie.id);
    } else if (isOpen === false) {
      postFavorite(addFavoriteProduct);
    }
    findFavorit();
  };

  useEffect(() => {
    getMovie(slug).then((res) => setmovie(res));
  }, []);

  useEffect(() => {
    setTimeout(() => {
      getComment(movie.id).then((res) => setComments(res));
      findFavorit();
    }, 500);
  }, [movie]);

  useEffect(() => {
    setTimeout(() => {
      getComment(movie.id).then((res) => setComments(res));
    }, 500);
  }, [reloadComment]);

  return (
    <div className='movies-card'>
      <Container
        className='form-container'
        style={{
          background: 'rgb(34, 34, 34)',
          color: 'azure',
          borderColor: 'azure',
          margin: ' auto ',
          marginTop: '5rem',
        }}
      >
        <div className='movies-card'>
          <img src={movie.img} alt='movie' />
          <div className='description'>
            <Card.Header>
              <h1>{movie.title}</h1>
              {Cookies.get('id') && (
                <form
                  onSubmit={handleFavoriteSubmit}
                  className='absolute right-5 top-0 outline-none'
                >
                  <button
                    onClick={handleFavoriteClick}
                    type='submit'
                    style={{
                      border: 'none',
                      background: 'none',
                    }}
                  >
                    {isOpen === true ? (
                      <div>
                        <StarClickedSvg />
                      </div>
                    ) : (
                      <div className='text-green-scan outline-none transition'>
                        <StarSvg />
                      </div>
                    )}
                  </button>
                </form>
              )}
            </Card.Header>
            <Card.Body
              style={{
                background: 'rgb(34, 34, 34)',
                color: 'azure',
                borderColor: 'azure',
              }}
            >
              <h4>{movie.director}</h4>
              <p>{movie.year}</p>

              <div>
                <Card
                  style={{
                    background: 'azure',
                    color: 'black',
                    width: '30rem',
                    height: '40rem',
                    borderColor: 'azure',
                    marginTop: '2rem',
                    padding: '1rem',
                    overflow: 'scroll',
                  }}
                >
                  {comments &&
                    comments.map((comment) => (
                      <p
                        style={{
                          textAlign: 'left',
                        }}
                      >
                        🌅 {comment.text}
                      </p>
                    ))}
                </Card>
              </div>
              <Form onSubmit={handleSubmit(onSubmit)}>
                <InputGroup>
                  <InputGroup.Text>Comment this film</InputGroup.Text>
                  <FormControl
                    as='textarea'
                    aria-label='With textarea'
                    {...register('text', {
                      required: 'You have to fill the name field',
                    })}
                  />
                  {movie && (
                    <FormControl
                      className='d-none'
                      defaultValue={movie.id}
                      {...register('movies_id')}
                    />
                  )}
                </InputGroup>
                <Button variant='primary' className='mt-4' type='submit'>
                  Send
                </Button>
              </Form>
            </Card.Body>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Movie;
