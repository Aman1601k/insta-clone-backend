const mongoose = require('mongoose')
const Post = mongoose.model('Post') 
const User = mongoose.model('User') 

const userprofile = (req,res) => {
    User.findOne({_id: req.params.id})
    .select("-password")
    .then(user => {
        Post.find({postedBy: req.params.id})
        .populate("postedBy","_id name")
        .exec((err,post) => {
            if(err){
                return res.status(206).json({error:err})
            }
            res.status(200).json({user,post})
        })
    }).catch(err => {
        return res.status(500).json({error:"User Not found"})
    })
}

module.exports = userprofile