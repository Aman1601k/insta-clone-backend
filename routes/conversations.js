const express = require('express');
const router  = express.Router();
const mongoose = require('mongoose');
const conversation = require('../controllers/conversation/conversation');
const userconversation = require('../controllers/conversation/userconversation');
const getreceiver = require('../controllers/conversation/getreceiver');
const getConversationId = require('../controllers/conversation/getConversationId');
const deleteConversation = require('../controllers/conversation/deleteConversation');
// const allconversation = require('../controllers/conversation/allconversation');

router.post("/conversations" , conversation)
router.get("/conversation/:userId" , userconversation)
// router.get("/allconversation/:" , allconversation)
router.post("/getreceiver" , getreceiver)
router.post("/getConversationId" , getConversationId)
router.delete('/conversation/:id', deleteConversation);

module.exports = router