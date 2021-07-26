const express = require('express');
const router  = express.Router();
const mongoose = require('mongoose');
const userprofile = require('../controllers/user/userprofile')
const followUser = require('../controllers/user/followUser')
const unfollowUser = require('../controllers/user/unfollowUser')
const updateprofilepic = require('../controllers/user/updateprofilepic')
const updatebio = require('../controllers/user/updatebio')
const suggesteduser = require('../controllers/user/suggesteduser')
const requireLogin = require('../middlewares/requireLogin');
const getfollowers = require('../controllers/user/getfollowers');
const getfollowing = require('../controllers/user/getfollowing');

router.get('/user/:id',requireLogin, userprofile)
router.put('/follow',requireLogin, followUser)
router.put('/unfollow',requireLogin, unfollowUser)
router.put('/updateprofilepic',requireLogin, updateprofilepic)
router.put('/updatebio',requireLogin, updatebio)
router.get('/suggesteduser',requireLogin,suggesteduser)
router.get('/getfollowers/:id', getfollowers);
router.get('/getfollowings/:id', getfollowing);

module.exports = router