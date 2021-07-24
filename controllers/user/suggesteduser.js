const mongoose = require('mongoose')
const User = mongoose.model('User') 

const suggesteduser = (req,res) => {
    User.find()
    .select("email name profilePicture")
    .exec((err,result) => {
        if (err) {
            return res.status(206).json({ error });
          }
        return res.status(200).json({ result });
    })
}

module.exports = suggesteduser