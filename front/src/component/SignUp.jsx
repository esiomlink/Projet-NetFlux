import { useContext } from 'react';
import UserContext from '../contexts/UserContext';
import { useHistory } from 'react-router-dom';
import '../App.css';
import { useForm } from 'react-hook-form';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { addNewUser } from '../api/API';

const SignUp = () => {
  let history = useHistory();
  const { users, setusers } = useContext(UserContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();


  const onSubmit = (values) => {
    addNewUser(values).then((newUser) => {
      setusers([...users, newUser]);
    });
    alert('merci pour votre inscription');
    history.push('/');
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
        <h1 className='mb-5'>Sign Up</h1>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Form.Group controlId='formBasicEmail'>
            <Form.Label>Psedo</Form.Label>
            <Form.Control
              type='text'
              placeholder='Enter Psedo'
              {...register('psedo', {
                required: 'You have to fill the name field',
              })}
            />
            {errors.psedo && <p>{errors.psedo.message}</p>}
          </Form.Group>
          <Form.Group controlId='formBasicPassword'>
            <Form.Label>Password</Form.Label>
            <Form.Control
              type='password'
              placeholder='Password'
              {...register('password', {
                required: 'You have to fill the name field',
              })}
            />
            {errors.password && <p>{errors.password.message}</p>}
          </Form.Group>
          <Form.Group controlId='formBasicPassword'>
            <Form.Label>First Name</Form.Label>
            <Form.Control
              type='text'
              placeholder='First name'
              {...register('firstname', {
                required: 'You have to fill the name field',
              })}
            />
            {errors.firstname && <p>{errors.firstname.message}</p>}
          </Form.Group>
          <Form.Group controlId='formBasicPassword'>
            <Form.Label>Last Name</Form.Label>
            <Form.Control
              type='text'
              placeholder='Last name'
              {...register('lastname', {
                required: 'You have to fill the name field',
              })}
            />
            {errors.lastname && <p>{errors.lastname.message}</p>}
          </Form.Group>
          <Form.Group controlId='formBasicEmail'>
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type='email'
              placeholder='Enter email'
              {...register('email', {
                required: 'You have to fill the name field',
              })}
            />
            {errors.email && <p>{errors.email.message}</p>}
            <Form.Text className='text-muted'>
              We'll never share your email and your password with anyone else.
            </Form.Text>
          </Form.Group>
          <Form.Group controlId='formBasicPassword'>
            <Form.Control
              type='number'
              defaultValue='2'
              className='d-none '
              {...register('role_id')}
            />
          </Form.Group>
          <Button variant='primary' type='submit' className='mt-4'>
            Submit
          </Button>
        </Form>
      </Card>
    </div>
  );
};

export default SignUp;
