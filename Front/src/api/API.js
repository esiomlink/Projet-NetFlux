import axios from 'axios';
axios.defaults.baseURL =
  process.env.REACT_APP_API_URL || 'http://localhost:3001';

  const getUser = async () => {
    return await axios.get('/api/user').then((res)=> res.data);
  };

  const getAllMovies = async () => {
    return await axios.get('/api/movies').then((res) => res.data);
  };
const postNewMovies = async (values) => {
  return await axios.post('/api/movies', values).then((res) => res.data);
};
export { getAllMovies, postNewMovies, getUser };