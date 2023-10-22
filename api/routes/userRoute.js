// userRoute.js
const express = require('express');
const userRouter = express.Router();

const { signup, login, logout } = require('../controller/userController');
const requireAuth = require('../middleware/requireAuth');



// fetch notes
userRouter.post('/signup', signup);
userRouter.post('/login', login);
userRouter.get('/logout', logout);

// test route
userRouter.get('/check-auth', requireAuth, (req, res) => {
  console.log(req.user);
  res.json({ msg: "okk" })
});



module.exports = userRouter;
