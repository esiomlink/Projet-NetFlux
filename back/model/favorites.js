const connection = require('../db-config');

const getAll = (id) => {
  return connection.query(
    `SELECT * FROM 
    movies_has_users 
    WHERE users_id = ?`,
    [id]
  );
};

const create = (data) => {
  return connection.query('INSERT INTO movies_has_users SET ?', [data]);
};

const update = (id, data) => {
  return connection.query('UPDATE movies_has_users SET ? WHERE id=?', [
    data,
    id,
  ]);
};

const deleteOne = (id) => {
  return connection.query('DELETE FROM movies_has_users WHERE movies_id=?', [
    id,
  ]);
};

module.exports = {
  getAll,
  create,
  update,
  deleteOne,
};
