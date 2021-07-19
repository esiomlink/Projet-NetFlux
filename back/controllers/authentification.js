const User = require('../model/users');
const { createToken } = require('../services/jwt');

const autentificationCheck = async (req, res) => {
  try {
    const { email, password } = req.body;
    User.findEmail(email).then((user) => {
      console.log(user)

      const { id, role } = user;
      if (!user) res.status(401).send('Invalid credentials');
      else {
        User.verifyPassword(password, user.hashedPassword).then(
          (passwordIsCorrect) => {
            if (passwordIsCorrect) {
              const token = createToken(id, role);
              res.cookie('token', token, {
                httpOnly: true,
              });
             User.findUserWeighting(user.id).then((weighting)=> {
               res.status(200).json({
                 id,
                 role,
                 token,
                 weighting,
               });
             })
            } else res.status(401).send('Invalid credentials');
          }
        );
      }
    });
  } catch (error) {
    console.log(error);
    res.status(500).send('An error occured while retrieving categories');
  }
};

module.exports = { autentificationCheck };
