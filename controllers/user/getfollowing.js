const mongoose = require('mongoose')
const User = mongoose.model('User') 

const getfollowing = (req,res) => {
    User.find({ _id: req.params.id })
      .populate('following', '_id name fullName profilePicture')
      .select('_id name profilePicture fullName')
      .then((user) => {
        return res.status(200).json({ user });
      })
      .catch((err) => {
        console.log(err);
      });
}

module.exports = getfollowing