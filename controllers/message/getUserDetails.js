const mongoose = require('mongoose')
const User = mongoose.model('User') 

const getUserDetails = async (req, res) => {
    try {
        const details = await User.find({
            _id: req.params.receiverId
        })
        .select("_id email name profilePicture")
        res.status(200).json(details)
    } catch (error) {
        res.status(206).json(error)
    }
}

module.exports = getUserDetails