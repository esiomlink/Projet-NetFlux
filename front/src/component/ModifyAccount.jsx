/* import { useContext } from 'react';
import UserContext from '../contexts/UserContext';
import { useHistory } from 'react-router-dom';
import '../App.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
const ModifyAccount = () => {
  let history = useHistory();
  const { userName } = useContext(UserContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (values) => {
   postUser(values).then((newUser) => {
      setusers([...users, newUser]);
    };
    alert('merci pour votre inscription');
    history.push('/');
  };
  return (
    <div className='formulaire'>
      <Card className='form-container'>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Form.Group controlId='formBasicEmail'>
            <Form.Label>Psedo</Form.Label>
            <Form.Control
              type='text'
              placeholder='Enter Psedo'
              {...register('user_psedo', {
                required: 'You have to fill the name field',
              })}
            />
            {errors.user_psedo && <p>{errors.user_psedo.message}</p>}
          </Form.Group>
          <Form.Group controlId='formBasicPassword'>
            <Form.Label>Password</Form.Label>
            <Form.Control
              type='password'
              placeholder='Password'
              {...register('user_password', {
                required: 'You have to fill the name field',
              })}
            />
            {errors.user_password && <p>{errors.user_password.message}</p>}
          </Form.Group>
          <Form.Group controlId='formBasicPassword'>
            <Form.Label>First Name</Form.Label>
            <Form.Control
              type='text'
              placeholder='First name'
              {...register('user_firstname', {
                required: 'You have to fill the name field',
              })}
            />
            {errors.user_firstname && <p>{errors.user_firstname.message}</p>}
          </Form.Group>
          <Form.Group controlId='formBasicPassword'>
            <Form.Label>Last Name</Form.Label>
            <Form.Control
              type='text'
              placeholder='Last name'
              {...register('user_lastname', {
                required: 'You have to fill the name field',
              })}
            />
            {errors.user_lastname && <p>{errors.user_lastname.message}</p>}
          </Form.Group>
          <Form.Group controlId='formBasicEmail'>
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type='email'
              placeholder='Enter email'
              {...register('user_email', {
                required: 'You have to fill the name field',
              })}
            />
            {errors.user_email && <p>{errors.user_email.message}</p>}
            <Form.Text className='text-muted'>
              We'll never share your email and your password with anyone else.
            </Form.Text>
          </Form.Group>
          <Button variant='primary' type='submit'>
            Submit
          </Button>
        </Form>
      </Card>
    </div>
  );
};

export default ModifyAccount;
  */