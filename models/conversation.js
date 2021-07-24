const mongoose = require('mongoose')
const {ObjectId} = mongoose.Schema.Types

const conversationSchema = new mongoose.Schema({
    members:{
        type:Array,
    }
},{timestamps : true})

mongoose.model("Conversation" , conversationSchema)