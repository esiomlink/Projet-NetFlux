const connection = require('../db-config');

const getAll = () => {
  return connection.query('SELECT * FROM category');
};

const getOne = (id) => {
  return connection.query('SELECT * FROM category WHERE id=?', [id]);
};

const create = (data) => {
  return connection.query('INSERT INTO category SET ?', [data]);
};

const update = (id, data) => {
  return connection.query('UPDATE category SET ? WHERE id=?', [data, id]);
};

const deleteOne = (id) => {
  return connection.query('DELETE FROM category WHERE id=?', [id]);
};

module.exports = {
  getAll,
  getOne,
  create,
  update,
  deleteOne,
};
