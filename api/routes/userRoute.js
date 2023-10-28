// userRoute.js
const express = require('express');
const userRouter = express.Router();

const { signup, login, logout, getProfile } = require('../controller/userController');
const requireAuth = require('../middleware/requireAuth');



// fetch notes
userRouter.post('/signup', signup);
userRouter.post('/login', login);
userRouter.get('/logout', logout);
userRouter.get('/profile', requireAuth, getProfile);

// test route
userRouter.get('/check-auth', requireAuth, (req, res) => {
  console.log(req.user);
  res.json({ msg: "okk" })
});



module.exports = userRouter;
