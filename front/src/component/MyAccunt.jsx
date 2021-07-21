import { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import { useForm } from 'react-hook-form';
import UserContext from '../contexts/UserContext';
import { updateUser } from '../api/API';
import '../App.css';

const MyAccunt = () => {
  const { userInfos, checkIfUserIsConnected } = useContext(UserContext);
  const [accountChange, setAccountChange] = useState(false);
  const hystory = useHistory()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

const onSubmit = (values) => {
  updateUser(values);
  setTimeout(() => {
    checkIfUserIsConnected()
    alert('Information changed')
    hystory.push('/')
  }, 500);
}
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
        <Card.Header>
          <h1>My account</h1>
        </Card.Header>
        <Card.Body
          style={{
            background: 'rgb(34, 34, 34)',
            color: 'azure',
            borderColor: 'azure',
          }}
        >
          {accountChange ? (
            <>
              <Form onSubmit={handleSubmit(onSubmit)}>
                <Form.Group controlId='formBasicEmail'>
                  <Form.Label>Psedo :</Form.Label>
                  <Form.Control
                    type='text'
                    defaultValue={userInfos.psedo}
                    {...register('psedo')}
                  />
                  {errors.psedo && <p>{errors.psedo.message}</p>}
                  <Form.Label>First name :</Form.Label>
                  <Form.Control
                    type='text'
                    defaultValue={userInfos.firstname}
                    {...register('firstname')}
                  />
                  {errors.firstname && <p>{errors.firstname.message}</p>}
                  <Form.Label>Last name :</Form.Label>
                  <Form.Control
                    type='text'
                    defaultValue={userInfos.lastname}
                    {...register('lastname')}
                  />
                  {errors.lastname && <p>{errors.lastname.message}</p>}
                  <Form.Label>Email :</Form.Label>
                  <Form.Control
                    type='text'
                    defaultValue={userInfos.email}
                    {...register('email')}
                  />
                  {errors.email && <p>{errors.email.message}</p>}
                </Form.Group>
                <Button variant='primary' className='mt-5' type='submit'>
                  Valide this informations
                </Button>
              </Form>
            </>
          ) : (
            <>
              <Card.Title>Psedo: {userInfos.psedo}</Card.Title>
              <Card.Title>First name: {userInfos.firstname}</Card.Title>
              <Card.Title>Last name: {userInfos.lastname}</Card.Title>
              <Card.Title>Email: {userInfos.email}</Card.Title>
              <Button
                variant='primary'
                className='mt-5'
                onClick={() => setAccountChange(true)}
              >
                Change my informations
              </Button>
            </>
          )}
        </Card.Body>
      </Card>
    </div>
  );
};

export default MyAccunt;
