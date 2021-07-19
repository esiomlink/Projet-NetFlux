const Category = require('../model/categorys');

const getAllCategorys = async (req, res) => {
  try {
    const categorys = await Category.getAll();
    res.status(200).json(categorys[0]);
  } catch (error) {
    console.log(error);
    res.status(500).send('An error occured while retrieving categorys');
  }
};

const getCategory = async (req, res) => {
  try {
    const { id } = req.params;
    const [category] = await Category.getOne(id);
    res.status(200).json(category[0]);
  } catch (error) {
    console.log(error);
    res.status(500).send('An error occured while retrieving category infos');
  }
};

const deleteCategory = async (req, res) => {
  try {
    const { id } = req.params;
    await Category.deleteOne(id);
    res.sendStatus(204);
  } catch (error) {
    console.log(error);
    res.status(500).send('An error occured while deleting category');
  }
};

const createCategory = async (req, res) => {
  try {
    const { body } = req;
    const { insertId } = await Category.create(body);
    res.status(201).json({
      id: insertId,
      ...body,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send('An error occured while creating category');
  }
};

const updateCategory = async (req, res) => {
  try {
    const { id } = req.params;
    const { body } = req;
    await Category.udpate(id, body);
    res.sendStatus(204);
  } catch (error) {
    console.log(error);
    res.status(500).send('An error occured while updating category');
  }
};

module.exports = {
  getAllCategorys,
  deleteCategory,
  createCategory,
  getCategory,
  updateCategory,
};
