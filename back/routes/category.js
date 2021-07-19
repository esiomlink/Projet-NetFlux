const express = require('express');

const router = express.Router();
const {
  getAllCategorys,
  deleteCategory,
  createCategory,
  getCategory,
  updateCategory,
} = require('../controllers/category');

router.get('/', getAllCategorys);
router.get('/:id', getCategory);
router.delete('/:id', deleteCategory);
router.post('/', createCategory);
router.put('/:id', updateCategory);

module.exports = router;
