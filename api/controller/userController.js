const User = require('../models/user');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');


async function signup(req, res) {
  // get req
  const { email, password, username } = req.body;

  // generate hash password
  const hashPass = bcrypt.hashSync(password, 8);

  // store to db
  try {
    await User.create({ username, email, password: hashPass });
    res.sendStatus(200);
  }
  catch (err) {
    res.json(err)
  }
}



async function login(req, res) {
  // get req
  const { username, email, password } = req.body;

  // find user
  try {
    const user = await User.findOne({ email });
    if (!user) return res.sendStatus(401);

    // compare pass
    bcrypt.compare(password, user.password, function (passErr, passRes) {
      if (passRes === true) {

        // generate token
        const exp = Date.now() + 1000 * 60 * 60 * 24 * 30;
        const token = jwt.sign({ sub: user._id, exp }, process.env.JWT_SECRET);


        // set the cookie
        res.cookie("Authorization", token, {
          expires: new Date(exp),
          httpOnly: true,
          sameSite: "lax",
          secure: process.env.NODE_ENV === 'production'
        })

        res.sendStatus(200);
      } else {
        res.sendStatus(401)
      }
    });

  }
  catch (err) {
    res.json(err)
  }


}

async function logout(req, res) {
  res.clearCookie("Authorization");
  res.sendStatus(200);
}

async function getProfile(req, res) {
  res.json({
    user: req.user
  })
}



module.exports = {
  signup, login, logout, getProfile
}