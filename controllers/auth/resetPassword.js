const mongoose = require('mongoose')
const User = mongoose.model('User')
const crypto = require('crypto')
const mailer = require('../../middlewares/mailer')

const resetPassword = (req, res) => {
    crypto.randomBytes(32 , (err,buffer) => {
        if(err) {
            console.log(err)
        }
        const token = buffer.toString("hex")
        User.findOne({email: req.body.email})
        .then(user => {
            if(!user){
                return res.status(206).json({error: "User don't exist with that email"})
            }
            user.resetToken = token
            user.expireToken = Date.now() + 3600000

            const message = 'Password reset';
            const subject = 'Password reset';   
            const html = `
                <p>You are requested for Password Reset</p>
                <h5>Click on <a href="http://localhost:3000/reset/${token}">link</a> to reset your password</h5>
            `
            user.save().then((result) => mailer(user.email, message, subject, html))
            res.status(200).json({message:"Check your email"})
        })
    })
}

module.exports = resetPassword