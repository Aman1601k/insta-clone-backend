const mongoose = require('mongoose')
const Conversation = mongoose.model('Conversation') 

const userconversation = async (req,res) => {
    try {
        const conversation = await Conversation.find({
            members:{ $in :[req.params.userId]},
        });
        res.status(200).json(conversation);
    } catch (error) {
        res.status(206).json(error);
    }
}

module.exports = userconversation