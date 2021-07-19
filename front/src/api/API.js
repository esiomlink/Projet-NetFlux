import axios from 'axios';
axios.defaults.baseURL ='http://localhost:8080';

const getUser = async () => {
  return await axios.get('/api/users').then((res) => res.data);
};
const postUser = async (values) => {
  console.log(values)
  return await axios.post('/login', values).then((res) => console.log(res));
};
const getAllMovies = async () => {
  return await axios.get('/api/movies').then((res) => res.data);
};
const postNewMovies = async (values) => {
  return await axios.post('/api/movies', values).then((res) => res.data);
};
export { getAllMovies, postNewMovies, getUser, postUser };
