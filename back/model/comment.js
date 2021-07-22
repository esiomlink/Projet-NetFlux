const connection = require('../db-config');

const getAll = () => {
  return connection.query('SELECT * FROM comment');
};

const getOne = (id) => {
  return connection.query('SELECT * FROM comment WHERE movies_id=?', [id]);
};

const create = (data) => {
  return connection.query('INSERT INTO comment SET ?', [data]);
};

const update = (id, data) => {
  return connection.query('UPDATE comment SET ? WHERE id=?', [data, id]);
};

const deleteOne = (id) => {
  return connection.query('DELETE FROM comment WHERE id=?', [id]);
};

module.exports = {
  getAll,
  getOne,
  create,
  update,
  deleteOne,
};
