import { useContext } from 'react';

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import UserContext from '../contexts/UserContext';
import '../App.css';

const MyAccunt = () => {
  const { userInfos } = useContext(UserContext);


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
          <Card.Title>Psedo: {userInfos.psedo}</Card.Title>
          <Card.Title>First name: {userInfos.firstname}</Card.Title>
          <Card.Title>Last name: {userInfos.lastname}</Card.Title>
          <Card.Title>Email: {userInfos.email}</Card.Title>


          <Button variant='primary' className='mt-5'>Go somewhere</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default MyAccunt;
