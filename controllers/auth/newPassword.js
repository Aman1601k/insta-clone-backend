const mongoose = require('mongoose')
const User = mongoose.model('User')
const bcrypt = require('bcrypt');

const newPassword = (req, res) => {
    const newPassword = req.body.password
    const sentToken = req.body.token
    User.findOne({resetToken: sentToken , expireToken:{$gt:Date.now()}})
    .then(user => {
        if(!user){
            return res.status(206).json({error: 'Try Again Later. Session expired!'})
        }
        bcrypt.hash(newPassword,12).then(hashedPassword => {
            user.password = hashedPassword
            user.resetToken = undefined
            user.expireToken = undefined
            user.save().then(savedUser => {
                res.json({message: "Password Updated Successfully"})
            })
        })
    })
    .catch(err => {
        console.log(err)
    })
}

module.exports = newPassword