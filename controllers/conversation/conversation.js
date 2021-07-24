const mongoose = require('mongoose')
const Conversation = mongoose.model('Conversation') 

const conversation = async (req,res) => {
    const newConversation = new Conversation({
        members:[req.body.senderId , req.body.receiverId],
    });
 
    try {
        const savedConversation = await newConversation.save()
        res.status(200).json(savedConversation)
    } catch (error) {
        res.status(206).json(error);
    }
}

module.exports = conversation