const express = require('express')
const router  = express.Router();
const signUp = require('../controllers/auth/signUp')
const signIn = require('../controllers/auth/signIn') 
const resetPassword = require('../controllers/auth/resetPassword') 
const newPassword = require('../controllers/auth/newPassword') 
const requireLogin = require('../middlewares/requireLogin');
const { signout } = require('../controllers/auth/signOut');

router.get('/' , requireLogin  ,(req, res) => {
    res.send("hello")
})

router.post('/signup' , signUp )
router.post('/signin' , signIn )
router.post('/reset-password' , resetPassword )
router.post('/new-password' , newPassword )
router.post('/signout' , signout )

module.exports = router;