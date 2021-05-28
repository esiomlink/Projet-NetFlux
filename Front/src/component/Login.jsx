import { useContext } from 'react';
import { useHistory } from 'react-router-dom';
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
    reset,
    formState: { errors },
  } = useForm();
  
  function handleClick() {
    history.push('/');
  }
  
  const onSubmit = (values) => {
    users.forEach((user, index) =>
    user.user_email === values.user_email &&
    user.user_password === values.user_password
    ? (setIsConnected(true),
    setuserName(user.user_psedo))
    : alert('email or password is false')
    );
    reset();
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
          <Button
            variant='primary'
            type='submit'
            onClick={isConnected && handleClick()}
          >
            Submit
          </Button>
        </Form>
      </Card>
    </div>
  );
};

export default Login;
