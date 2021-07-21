import axios from 'axios';
import Cookies from 'js-cookie';
axios.defaults.baseURL = 'http://localhost:8080';

const getUser = async () => {
  const id = Cookies.get('id');
  return await axios.get(`/api/users/${id}`).then((res) => res.data);
};
const login = async (values) => {
  return await axios.post('/login', values).then((res) => {
    Cookies.set('id', res.data.id);
    Cookies.set('role', res.data.role_id);
    Cookies.set('token', res.data.token);
  });
};
const getCategory = async (values) => {
  return await axios.get('/api/categories').then((res) => res.data);
};
const addNewUser = async (values) => {
  return await axios.post('./api/users', values).then((res) => res.data);
};
const getAllMovies = async () => {
  return await axios.get('/api/movies').then((res) => res.data);
};
const postNewMovies = async (values) => {
  return await axios.post('/api/movies', values).then((res) => res.data);
};
export { getAllMovies, postNewMovies, getUser, login, addNewUser, getCategory };