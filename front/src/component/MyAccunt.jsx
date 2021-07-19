import { useContext, useState } from 'react';
import {getUser} from '../api/API'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import UserContext from '../contexts/UserContext';
import '../App.css';

const MyAccunt = () => {
  const { userName } =
  useContext(UserContext);
  console.log(userName)
  const [mmmmm, setmmmmm] = useState('');
  console.log(mmmmm)

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
          <Card.Title>Psedo: {userName[0]}</Card.Title>
          <Card.Title>Password: {userName[1]}</Card.Title>
          <Card.Title>First name: {userName[2]}</Card.Title>
          <Card.Title>Last name: {userName[3]}</Card.Title>
          <Card.Title>Email: {userName[4]}</Card.Title>

          <Card.Text>
            With supporting text below as a natural lead-in to additional
            content.
          </Card.Text>
          <Button variant='primary'>Go somewhere</Button>
          <button type='button' onClick={setmmmmm(getUser())}>
            get button{' '}
          </button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default MyAccunt;
