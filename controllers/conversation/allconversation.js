const mongoose = require('mongoose')
const Conversation = mongoose.model('Conversation') 

const allconversation = async (req,res) => {
    Conversation.find()
    .then(allconvo => {
        res.status(200).json({allconvo})
    })
    .catch(err => {
        console.log(err)
    })
}

module.exports = allconversation