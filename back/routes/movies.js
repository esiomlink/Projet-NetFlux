const express = require('express');

const router = express.Router();
const {
  getAllMovies,
  deleteMovie,
  createMovie,
  getMovie,
  updateMovie,
} = require('../controllers/movies');

router.get('/', getAllMovies);
router.get('/:id', getMovie);
router.delete('/:id', deleteMovie);
router.post('/', createMovie);
router.put('/:id', updateMovie);

module.exports = router;
