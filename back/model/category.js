const connection = require('../db-config');

const getAll = () => {
  return connection.query('SELECT * FROM categorys');
};

const getOne = (id) => {
  return connection.query('SELECT * FROM categorys WHERE id=?', [id]);
};

const create = (data) => {
  return connection.query('INSERT INTO categorys SET ?', [data]);
};

const update = (id, data) => {
  return connection.query('UPDATE categorys SET ? WHERE id=?', [data, id]);
};

const deleteOne = (id) => {
  return connection.query('DELETE FROM categorys WHERE id=?', [id]);
};

module.exports = {
  getAll,
  getOne,
  create,
  update,
  deleteOne,
};
