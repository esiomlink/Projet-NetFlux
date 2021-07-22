import { useContext } from 'react';
import UserContext from '../contexts/UserContext';
import { postNewMovies } from '../api/API';
import { useForm } from 'react-hook-form';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import '../App.css';

const FormAddMovies = () => {
  const { movies, setmovies, category } = useContext(UserContext);
  console.log(category);
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
      <Card
        className='form-container'
        style={{
          background: 'rgb(34, 34, 34)',
          color: 'azure',
          borderColor: 'azure',
        }}
      >
        <h1>Add New Movie</h1>
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
            <Form.Label>category :</Form.Label>
            <Form.Control as='select' {...register('category_id')}>
              {category.map((cat) => (
                <option value={cat.id}>{cat.name}</option>
              ))}
            </Form.Control>
          </Form.Group>
          <Button variant='primary' type='submit' className='mt-4'>
            Add new movie
          </Button>
        </Form>
      </Card>
    </div>
  );
};

export default FormAddMovies;
