import { useState, useEffect } from 'react';
import UserContext from '../contexts/UserContext';
import { getAllMovies, getUser, getCategory } from '../api/API';
import Cookies from 'js-cookie';

const GlobalContext = ({ children }) => {
  const [users, setusers] = useState('');
  const [userInfos, setUserInfos] = useState('');
  const [isConnected, setIsConnected] = useState(false);
  const [movies, setmovies] = useState('');
  const [category, setCategory] = useState('');
  console.log(category)

function cleanAllCookies() {
  Cookies.remove('id');
  Cookies.remove('role');
  Cookies.remove('token');
}
function checkIfUserIsConnected() {
  if (Cookies.get('id')) {
    setIsConnected(true);
    getUser().then((infos) => setUserInfos(infos));
  }
}

useEffect(() => {
  getCategory().then((res) => setCategory(res));
}, [isConnected]);


  useEffect(() => {
    getAllMovies().then((res) => setmovies(res[0]));
    checkIfUserIsConnected();
  }, []);

  return (
    <UserContext.Provider
      value={{
        users,
        setusers,
        isConnected,
        setIsConnected,
        movies,
        setmovies,
        userInfos,
        setUserInfos,
        checkIfUserIsConnected,
        cleanAllCookies,
        category,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
export default GlobalContext;
