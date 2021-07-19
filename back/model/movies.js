const connection = require('../db-config');

const getAll = () => {
  return connection.query('SELECT * FROM movies');
};

const getOne = (id) => {
  return connection.query('SELECT * FROM movies WHERE id=?', [id]);
};

const create = (data) => {
  return connection.query('INSERT INTO movies SET ?', [data]);
};

const update = (id, data) => {
  return connection.query('UPDATE movies SET ? WHERE id=?', [data, id]);
};

const deleteOne = (id) => {
  return connection.query('DELETE FROM movies WHERE id=?', [id]);
};

module.exports = {
  getAll,
  getOne,
  create,
  update,
  deleteOne,
};
