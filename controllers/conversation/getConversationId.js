const mongoose = require('mongoose')
const Conversation = mongoose.model('Conversation') 

// const senderId ="60eb222c416d2022f8ae6f57"
// const receiverId = "60e842f480b2e81074e6eb3a"

const getConversationId = async (req,res) => {
    Conversation.find({
        $and: [
          { members: req.body.senderId },
          { members: req.body.receiverId },
        ],
      })
    .then(result => {
        res.status(200).json({result})
    })
    .catch(err => {
        console.log(err)
    })
}

module.exports = getConversationId