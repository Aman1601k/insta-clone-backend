const mongoose = require('mongoose')
const Message = mongoose.model('Message') 

const message = async (req, res) => {
    const newMessage = new Message(req.body)
    try {
        const savedMessage = await newMessage.save();
        res.status(200).json(savedMessage)
    } catch (error) {
        res.status(206).json(error)
    }
}

module.exports = message 