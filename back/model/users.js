const Joi = require('joi');
const argon2 = require('argon2');
const connection = require('../db-config');

const hashingOptions = {
  type: argon2.argon2id,
  memoryCost: 2 ** 16,
  timeCost: 5,
  parallelism: 1,
};

const hashPassword = (plainPassword) => {
  return argon2.hash(plainPassword, hashingOptions);
};

const verifyPassword = (plainPassword, hashedPassword) => {
  return argon2.verify(hashedPassword, plainPassword, hashingOptions);
};

const validate = (data, forCreation = true) => {
  const presence = forCreation ? 'required' : 'optional';
  return Joi.object({
    psedo: Joi.string().max(25).presence(presence),
    password: Joi.string().max(255).presence(presence),
    firstname: Joi.string().max(45).presence(presence),
    lastname: Joi.string().max(45).presence(presence),
    email: Joi.string().email().max(80).presence(presence),
  }).validate(data, { abortEarly: false }).error;
};

const getAll = () => {
  return connection.query('SELECT * FROM users');
};

const getOne = (id) => {
  return connection.query('SELECT * FROM users WHERE id=?', [id]);
};

const createOne = ({
  email,
  lastname,
  firstname,
  password,
  psedo,
  role_id,
}) => {
  return hashPassword(password).then((hashedPassword) =>
    connection.query(
      'INSERT INTO users ( email, lastname, firstname, hashedPassword, psedo, role_id) VALUES (?, ?, ?, ?, ?, ?)',
      [email, lastname, firstname, hashedPassword, psedo, role_id]
    )
  );
};

const findEmail = (email) => {
  return connection
    .query(
      `SELECT * FROM users 
       WHERE email = ?`,
      [email]
    )
    .then(([results]) =>results);
};

const update = (id, data) => {
  console.log(data)
  return connection.query('UPDATE users SET ? WHERE id=?', [data, id]);
};

const deleteOne = (id) => {
  return connection.query('DELETE FROM users WHERE id=?', [id]);
};

module.exports = {
  getAll,
  getOne,
  createOne,
  update,
  deleteOne,
  findEmail,
  validate,
  verifyPassword,
};
