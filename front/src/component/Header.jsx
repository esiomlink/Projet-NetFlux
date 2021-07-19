import { useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
import UserContext from '../contexts/UserContext';
import '../App.css';
import Button from 'react-bootstrap/Button';

const Header = () => {
  const { userName, setuserName, isConnected, setIsConnected } =
    useContext(UserContext);
  let history = useHistory();

  const handleClick = () => {
    setIsConnected(false);
    setuserName('login');
    history.push('/');
  };

  return (
    <div className='header'>
      <Link style={{ textDecoration: 'none' }} to='/' label='home'>
        <h1>NetFlux</h1>
      </Link>
      <div className='button'>
        {!isConnected && (
          <div>
            <Link to='/login' label='login'>
              <Button className='btn' variant='primary'>
                {userName}
              </Button>
            </Link>
            <Link to='/signup' label='signup'>
              <Button className='btn' variant='success'>
                Sign Up
              </Button>
            </Link>
          </div>
        )}
        {isConnected && (
          <div>
            <Link to='/myaccount' label='myaccount'>
              <Button className='btn' variant='primary'>
                My account
              </Button>
            </Link>
            <Button
              className='btn'
              variant='danger'
              onClick={() => handleClick()}
            >
              Disconnect
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
