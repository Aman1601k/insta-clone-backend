const express = require('express');
const router  = express.Router();
const mongoose = require('mongoose');
const createPost = require('../controllers/post/createPost');
const allPost = require('../controllers/post/allPost');
const getsubpost = require('../controllers/post/getsubpost');
const myPost = require('../controllers/post/myPost');
const likePost = require('../controllers/post/likePost');
const unlikePost = require('../controllers/post/unlikePost');
const comment = require('../controllers/post/comment');
const deletepost = require('../controllers/post/deletepost');
const deletecomment = require('../controllers/post/deletecomment');
const requireLogin = require('../middlewares/requireLogin');

router.get('/allpost', requireLogin, allPost);
router.get('/getsubpost', requireLogin, getsubpost);
router.post('/createpost' ,requireLogin, createPost);
router.get('/mypost' ,requireLogin, myPost);
router.put('/like' , requireLogin, likePost);
router.put('/unlike' , requireLogin, unlikePost);
router.put('/comment' , requireLogin, comment);
router.delete('/deletepost/:postId', requireLogin, deletepost);
router.delete('/deletecomment/:postId/:commentId', requireLogin, deletecomment);

module.exports = router