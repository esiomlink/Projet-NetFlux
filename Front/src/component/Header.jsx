import { useContext } from 'react';
import { Link } from 'react-router-dom';
import UserContext from '../contexts/UserContext';
import '../App.css';
import Button from 'react-bootstrap/Button';

const Header = () => {
  const { userName,setuserName, isConnected, setIsConnected } = useContext(UserContext);

  return (
    <div className='header'>
      <Link style={{ textDecoration: 'none' }} to='/' label='home'>
        <h1>NetFlux</h1>
      </Link>
      <div className='button'>
        {!isConnected && (
          <Link to='/login' label='login'>
            <Button className='btn' variant='primary'>
              {userName}
            </Button>{' '}
          </Link>
        )}
        {isConnected && (
          <Button
            className='btn'
            variant='danger'
            onClick={() => (setIsConnected(false), setuserName('login'))}
          >
            Disconnect
          </Button>
        )}
      </div>
    </div>
  );
};

export default Header;
