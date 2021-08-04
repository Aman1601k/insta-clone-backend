const mongoose = require('mongoose')
const Post = mongoose.model('Post') 
const User = mongoose.model('User') 


const followUser = (req,res) => {
    User.findByIdAndUpdate(req.body.followId,{
        $push:{followers:req.user._id}
    },{new:true}, 
    (err, result )=>{
        if(err){
            return res.status(206).json({error:err})
        }
        User.findByIdAndUpdate(req.user._id,{
            $push:{following:req.body.followId}
        },{new:true}).select("-password").then(result => {
            res.status(200).json(result)
        }).catch(err => {
            return res.status(206).json({error:err})
        })
    })
}

module.exports = followUser