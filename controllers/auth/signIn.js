const mongoose = require('mongoose')
const User = mongoose.model('User')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const {JWT_SECRET} = require('../../keys')

const signIn = (req, res) => {
    const {email,password} = req.body
    if(!email || !password){
        return res.status(206).json({error: 'Please provide valid email & password'})
    }
    if(!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)){
        return res.status(206).json({error: 'Invalid Email'})
    }
    User.findOne({email: email})
    .then(savedUser => {
        if(!savedUser){
            res.status(206).json({error: 'Invalid email or password'})
        }
        bcrypt.compare(password,savedUser.password)
        .then(doMatch => {
            if(doMatch){
                // res.json({message: 'Successfully Signin'})
                const token = jwt.sign({_id:savedUser._id},JWT_SECRET)
                const {_id ,name,email,profilePicture,followers,following} = savedUser;
                res.json({token, user:{_id,name,email,profilePicture,followers,following}})
            }
            else{
                res.status(206).json({error: 'Invalid email or password'})
            }
        }).catch(err => {
            console.log(err)
        })
    })
}

module.exports = signIn