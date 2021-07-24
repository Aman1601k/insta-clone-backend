const mongoose = require('mongoose')
const User = mongoose.model('User') 

// const receiverId = ["60ebd6d29560734f30e1017b", "60e842f480b2e81074e6eb3a"]

const getreceiver = async (req,res) => {
    User.find({_id : {$in : req.body.receiverId}})
    .select("email name profilePicture")
    .exec((err, result) => {
        if(err){
            return res.status(206).json({error:err})
        }
        else{
            res.status(200).json(result)
        }
    })
}

module.exports = getreceiver