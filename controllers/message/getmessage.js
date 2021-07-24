const mongoose = require('mongoose')
const Message = mongoose.model('Message') 

const getmessage = async (req, res) => {
    try {
        const messages = await Message.find({
            conversationId: req.params.conversationId
        })
        res.status(200).json(messages)
    } catch (error) {
        res.status(206).json(error)
    }
}

module.exports = getmessage