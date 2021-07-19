import { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { getUser } from '../api/API';
import UserContext from '../contexts/UserContext';
import '../App.css';
import { useForm } from 'react-hook-form';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Login = () => {
  const { users, isConnected, setIsConnected, setuserName } =
  useContext(UserContext);
  let history = useHistory();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  
  function handleClick() {
    history.push('/');
  }

  const onSubmit = (values) => {
    users.forEach((user,index) => {
      if (
        user.email === values.email &&
        user.password === values.password
      ) {
        setIsConnected(true);
        setuserName(
          [user.psedo,
          user.password,
          user.firstname,
          user.lastname,
          user.email]
        );
      }
    });
  };
  

  
  return (
    <div className='formulaire'>
      <Card className='form-container'>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Form.Group controlId='formBasicEmail'>
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type='email'
              placeholder='Enter email'
              {...register('user_email')}
            />
            {errors.user_email && <p>{errors.user_email.message}</p>}
            <Form.Text className='text-muted'>
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>
          <Form.Group controlId='formBasicPassword'>
            <Form.Label>Password</Form.Label>
            <Form.Control
              type='password'
              placeholder='Password'
              {...register('user_password')}
            />
            {errors.user_password && <p>{errors.user_password.message}</p>}
          </Form.Group>
           <button type='button'></button>
          <Button
            variant='primary'
            type='submit'
            onClick={isConnected?handleClick():undefined}
          >
            Submit
          </Button>
        </Form>
      </Card>
    </div>
  );
};

export default Login;
