const express = require('express');
const router  = express.Router();
const mongoose = require('mongoose');
const message = require('../controllers/message/message')
const getmessage = require('../controllers/message/getmessage')
const getUserDetails = require('../controllers/message/getUserDetails')

router.post("/message" , message)
router.get("/message/:conversationId" , getmessage)
router.get("/userdetails/:receiverId" , getUserDetails)

module.exports = router 