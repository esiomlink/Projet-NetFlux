import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { getMovie, getComment, postComment } from '../api/API';
import Card from 'react-bootstrap/Card';
import { useForm } from 'react-hook-form';
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import '../App.css';

const Movie = () => {
  const [movie, setmovie] = useState('');
  const [comments, setComments] = useState('')
  console.log(comments)

  let { slug } = useParams();

  const { register, handleSubmit } = useForm();

  const onSubmit = (values) => {
    postComment(values);
  };

  useEffect(() => {
    getMovie(slug).then((res) => setmovie(res));
  }, []);

  useEffect(() => {
    getComment(movie.id).then((res) => setComments(res));
  }, [movie]);

  return (
    <div className='movies-card'>
      <Card
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
          <img src={movie.img} style={{ width: '40rem' }} alt='movie' />
          <div className='description'>
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
              <h4>{movie.director}</h4>
              <p>{movie.year}</p>
              <Form onSubmit={handleSubmit(onSubmit)}>
                <InputGroup>
                  <InputGroup.Text>Comment this film</InputGroup.Text>
                  <FormControl
                    as='textarea'
                    aria-label='With textarea'
                    {...register('text')}
                  />
                  <FormControl
                    value={movie.id}
                    {...register('movies_id')}
                  />
                </InputGroup>
                <Button variant='primary' className='mt-4' type='submit'>
                  Send
                </Button>
              </Form>
            </Card.Body>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Movie;
