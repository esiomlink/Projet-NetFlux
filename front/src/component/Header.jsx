import { useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
import UserContext from '../contexts/UserContext';
import '../App.css';
import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

import logo from '../img/logo.png';

const Header = () => {
  const { isConnected, setIsConnected, cleanAllCookies } =
    useContext(UserContext);
  let history = useHistory();

  const handleClick = () => {
    setIsConnected(false);
    cleanAllCookies();
    history.push('/');
  };

  return (
    <div className='header'>
      <Link style={{ textDecoration: 'none' }} to='/' label='home'>
        <img src={logo} alt='logo' />
      </Link>
      <div className='button'>
        {!isConnected && (
          <div>
            <Link to='/login' label='login'>
              <Button className='btn' variant='primary'>
                login
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
          <div className='drop-menu'>
            <DropdownButton id='dropdown-basic-button' title={`👾`}>
              <Dropdown.Item href='/myaccount'>
                <Link to='/myaccount' label='myaccount'>
                  <Button className='btn w-100' variant='light'>
                    My account
                  </Button>
                </Link>
              </Dropdown.Item>
              <Dropdown.Item>
                <Link to='/addmovie' label='addmovies'>
                  <Button className='btn w-100' variant='light'>
                    Add movie
                  </Button>
                </Link>
              </Dropdown.Item>
              <Dropdown.Item>
                <Button
                  className='btn w-100'
                  variant='light'
                  onClick={() => handleClick()}
                >
                  Disconnect
                </Button>
              </Dropdown.Item>
            </DropdownButton>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
