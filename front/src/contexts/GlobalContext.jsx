import { useState, useEffect } from 'react';
import UserContext from '../contexts/UserContext';
import {
  getAllMovies,
  getUser,
  getCategory,
  getAllUserFavorites,
} from '../api/API';
import Cookies from 'js-cookie';

const GlobalContext = ({ children }) => {
  const [users, setusers] = useState('');
  const [userInfos, setUserInfos] = useState('');
  const [isConnected, setIsConnected] = useState(false);
  const [movies, setmovies] = useState('');
  const [category, setCategory] = useState('');
  const [favoritesId, setFavoritsId] = useState([]);
  const [myFavorit, setMyFavorit] = useState();

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
    setTimeout(() => {
      const fav = getFavoritMovies();
      setMyFavorit(fav);
    }, 500);
  }, [favoritesId]);

  useEffect(() => {
    getAllUserFavorites().then((favorit) => setFavoritsId(...favorit));
  }, [isConnected]);

  useEffect(() => {
    getCategory().then((res) => setCategory(res));
  }, [isConnected]);

  useEffect(() => {
    getAllMovies().then((res) => setmovies(res[0]));
    checkIfUserIsConnected();
  }, []);
  useEffect(() => {
    getAllMovies().then((res) => setmovies(res[0]));
  }, [movies]);

  function getFavoritMovies() {
    const myFavorit = [];
    movies &&
      favoritesId.forEach((fav) => {
        myFavorit.push(...movies.filter((movie) => movie.id === fav.movies_id));
      });
    return myFavorit;
  }

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
        favoritesId,
        setFavoritsId,
        myFavorit,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
export default GlobalContext;
