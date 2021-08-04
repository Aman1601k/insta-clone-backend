const mongoose = require('mongoose')
const {ObjectId} = mongoose.Schema.Types

const userSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    },
    resetToken:String,
    expireToken:Date,
    profilePicture:{
        type: String,
    },
    bio:{
        type: String,
    },
    followers:[{type:ObjectId ,ref:'User'}],
    following:[{type:ObjectId ,ref:'User'}],
    savedPosts:[{type: ObjectId, ref: 'Post' }],
})

mongoose.model('User' , userSchema)