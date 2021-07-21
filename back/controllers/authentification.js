const User = require('../model/users');
const { createToken } = require('../services/jwt');

const autentificationCheck = async (req, res) => {
  try {
    const { email, password } = req.body;
    User.findEmail(email).then((user) => {
      if (user.length<=0) res.status(401).send('Invalid credentials');
      else {
        const { id, role_id } = user[0];
        User.verifyPassword(password, user[0].hashedPassword).then(
          (passwordIsCorrect) => {
            if (passwordIsCorrect) {
              const token = createToken(id, role_id);
              res.cookie('token', token, {
                httpOnly: true,
              });
              res.status(200).json({
                id,
                role_id,
                token,
              });
            } else res.status(401).send('Invalid credentials');
          }
        );
      }
    });
  } catch (error) {
    console.error(error);
    res.status(500).send('An error occured while retrieving user information');
  }
};

module.exports = { autentificationCheck };
