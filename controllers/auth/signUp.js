const mongoose = require('mongoose')
const User = mongoose.model('User')
const bcrypt = require('bcrypt');
const mailer = require('../../middlewares/mailer')

const signUp = (req, res) => {
    const {name,email,password} = req.body
    if(!name || !email || !password ){
        return res.status(206).json({error:"Please add all the fields"})
    }
    User.findOne({email})
    .then((savedUser) => {
        if(savedUser){
            return res.status(206).json({error:"User already exists with that email"})
        }
        bcrypt.hash(password,12)
        .then(hashedPassword => {
           const user = new User({
            email,
            password : hashedPassword,
            name,
        });
        const message = 'Welcome to insta_clone';
        const subject = 'Welcome to insta_clone';   
        const html = `Welcome ${user.name} to insta-clone.`

        user.save().then(() => mailer(user.email, message, subject, html))
        res.status(200).json({message:"User Successfully Created"})
        })
    }).catch(err => {
        console.log(err)
    })
}

module.exports = signUp