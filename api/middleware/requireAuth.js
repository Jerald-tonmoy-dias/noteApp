const jwt = require('jsonwebtoken');
const User = require('../models/user');

async function requireAuth(req, res, next) {

  try {
    // read token 
    const token = req.cookies.Authorization;

    // decode the token 
    const decodded = jwt.verify(token, process.env.JWT_SECRET);

    // check expiration
    if (Date.now() > decodded.exp) return res.sendStatus(401);

    // find user using decoded sub
    const user = await User.findById(decodded.sub);
    if (!user) return res.sendStatus(401);


    // attach user to req
    req.user = user;


    // continue
    next();
  } catch (error) {
    res.sendStatus(401);
  }
}

module.exports = requireAuth;