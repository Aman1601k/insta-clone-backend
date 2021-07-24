const mongoose = require('mongoose')
const Post = mongoose.model('Post') 
const User = mongoose.model('User') 

const unfollowUser = (req,res) => {
    User.findByIdAndUpdate(req.body.unfollowId,{
        $pull:{followers:req.user._id}
    },{new:true} , 
    (err, result) =>{
        if(err){
            return res.status(206).json({error:err})
        }
        User.findByIdAndUpdate(req.user._id,{
            $pull:{following:req.body.unfollowId}
        },{new:true}).select("-password").then(result => {
            res.status(200).json(result)
            console.log("uuuuunnnnnfolllowwww================================",result)
        }).catch(err => {
            return res.status(206).json({error:err})
        })
    })
}


module.exports = unfollowUser