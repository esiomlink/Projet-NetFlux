const Movie = require('../model/movies');

const getAllMovies = async (req, res) => {
  try {
    const movies = await Movie.getAll();
    res.status(200).json(movies);
  } catch (error) {
    console.log(error);
    res.status(500).send('An error occured while retrieving movies');
  }
};

const getMovie = async (req, res) => {
  try {
    const { id } = req.params;
    const [movie] = await Movie.getOne(id);
    res.status(200).json(movie);
  } catch (error) {
    console.log(error);
    res.status(500).send('An error occured while retrieving movie infos');
  }
};

const deleteMovie = async (req, res) => {
  try {
    const { id } = req.params;
    await Movie.deleteOne(id);
    res.sendStatus(204);
  } catch (error) {
    console.log(error);
    res.status(500).send('An error occured while deleting movie');
  }
};

const createMovie = async (req, res) => {
  try {
    const { body } = req;
    const { insertId } = await Movie.create(body);
    res.status(201).json({
      id: insertId,
      ...body,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send('An error occured while creating movie');
  }
};

const updateMovie = async (req, res) => {
  try {
    const { id } = req.params;
    const { body } = req;
    await Movie.udpate(id, body);
    res.sendStatus(204);
  } catch (error) {
    console.log(error);
    res.status(500).send('An error occured while updating movie');
  }
};

module.exports = {
  getAllMovies,
  deleteMovie,
  createMovie,
  getMovie,
  updateMovie,
};
