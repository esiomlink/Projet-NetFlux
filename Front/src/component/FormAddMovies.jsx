import { postNewMovies } from '../api/API';
import { useForm } from 'react-hook-form';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import '../App.css';

const FormAddMovies = ({ movies, setmovies }) => {

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (values) => {
    postNewMovies(values).then((newMovies) =>
      setmovies([...movies, newMovies])
    );
    alert('Merci, le film a bien ete ajouter à la liste');
    reset();
  };
  return (
    <div className='formulaire'>
      <Card className='form-container'>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Form.Group controlId='formBasicEmail'>
            <Form.Label>Title :</Form.Label>
            <Form.Control
              type='text'
              placeholder='Enter Title'
              {...register('title', {
                required: 'You have to fill the name field',
              })}
            />
            {errors.title && <p>{errors.title.message}</p>}
            <Form.Label>Director :</Form.Label>
            <Form.Control
              type='text'
              placeholder='Enter Director'
              {...register('director')}
            />
            {errors.director && <p>{errors.director.message}</p>}
            <Form.Label>Year :</Form.Label>
            <Form.Control
              type='text'
              placeholder='Enter Year'
              {...register('year')}
            />
            {errors.year && <p>{errors.year.message}</p>}
            <Form.Label>Color :</Form.Label>
            <Form.Control
              type='number'
              placeholder='Enter 0 if black movie and 1 if color movie'
              {...register('color')}
            />
            {errors.color && <p>{errors.color.message}</p>}
            <Form.Label>Duration :</Form.Label>
            <Form.Control
              type='number'
              placeholder='Enter Duration'
              {...register('duration')}
            />
            {errors.duration && <p>{errors.duration.message}</p>}
            <Form.Label>Image :</Form.Label>
            <Form.Control
              type='text'
              placeholder='Enter URL of image'
              {...register('img')}
            />
            {errors.img && <p>{errors.img.message}</p>}
          </Form.Group>
          <Button variant='outline-primary' type='submit'>
            Add new movie
          </Button>
        </Form>
      </Card>
    </div>
  );
};

export default FormAddMovies;
