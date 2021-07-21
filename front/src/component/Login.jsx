import { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { login } from '../api/API';
import UserContext from '../contexts/UserContext';
import '../App.css';
import { useForm } from 'react-hook-form';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Login = () => {
  const { checkIfUserIsConnected } = useContext(UserContext);
  let history = useHistory();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (values) => {
    login(values)
      .then(() => history.push('/'))
      .catch(() => alert('login error'));
    setTimeout(() => {
      checkIfUserIsConnected();
    }, 500);
  };

  return (
    <div className='formulaire'>
      <Card className='form-container'>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Form.Group controlId='formBasicEmail'>
            <Form.Label>Email address</Form.Label>
            <Form.Text className='text-muted'>
              We'll never share your email and password with anyone else.
            </Form.Text>
            <Form.Control
              type='email'
              placeholder='Enter email'
              {...register('email', {
                required: 'You have to fill the name field',
              })}
            />
            {errors.user_email && <p>{errors.email.message}</p>}
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
            {errors.user_password && <p>{errors.password.message}</p>}
          </Form.Group>
          <Button variant='primary' className='mt-4' type='submit'>
            Submit
          </Button>
        </Form>
      </Card>
    </div>
  );
};

export default Login;
