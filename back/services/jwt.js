const jwt = require('jsonwebtoken');
const expressJwt = require('express-jwt')


const createToken = (payload) => {
  const token = jwt.sign({
    data : payload, 
    exp: Math.floor(Date.now()/1000)+(60*60)
  },
  process.env.JWT_KEY);
  return token
};

const authWithJwt = expressJwt({
  secret: process.env.JWT_KEY,
  algorithms: ['HS256']
})

const cookieJwtAuth = (req,res,next) => {
  const {token} = req.cookies;
  try{
    const user = jwt.verify(token, process.env.JWT_KEY);
   req.user = user;
    next();
  }catch(err){
    res.clearCookie("token");
  }
}



module.exports = { createToken, authWithJwt, cookieJwtAuth };