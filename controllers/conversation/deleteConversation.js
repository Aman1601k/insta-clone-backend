const mongoose = require('mongoose')
const Conversation = mongoose.model('Conversation') 

const deleteConversation = async (req,res) => {
    console.log(req.params.id);
    try {
      const conversation = await Conversation.findByIdAndDelete({
        _id: req.params.id,
      });
      return res
        .status(200)
        .json({ message: 'Deleted', conversation: conversation._id });
    } catch (error) {
      console.log(error);
    }
}

module.exports = deleteConversation