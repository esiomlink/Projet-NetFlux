import { useState, useEffect } from 'react';
import UserContext from '../contexts/UserContext';
import { getUser } from '../api/API';
import { getAllMovies } from '../api/API';

const GlobalContext = ({ children }) => {
  const [users, setusers] = useState('');
  const [userName, setuserName] = useState('Sign in');
  console.log(userName);
  const [isConnected, setIsConnected] = useState(false);
  const [movies, setmovies] = useState('');
  const [userValue, setuserValue] = useState('');

  useEffect(() => {
    getUser().then((res) => setusers(res));
  }, []);
  useEffect(() => {
    getAllMovies().then((res) => setmovies(res[0]));
  }, []);
  return (
    <UserContext.Provider
      value={{
        users,
        setusers,
        isConnected,
        setIsConnected,
        userName,
        setuserName,
        movies,
        setmovies,
        userValue,
        setuserValue,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
export default GlobalContext;
