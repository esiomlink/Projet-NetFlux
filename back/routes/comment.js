const express = require('express');

const router = express.Router();
const {
  getAllComments,
  deleteComment,
  createComment,
  getComment,
  updateComment,
} = require('../controllers/comment');

router.get('/', getAllComments);
router.get('/:id', getComment);
router.delete('/:id', deleteComment);
router.post('/', createComment);
router.put('/:id', updateComment);

module.exports = router;
