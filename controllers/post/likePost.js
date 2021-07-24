const mongoose = require('mongoose')
const Post = mongoose.model('Post') 

const likePost = (req,res) => {
    Post.findByIdAndUpdate(req.body.postId , {
        $push:{likes:req.user._id}
    },{
        new: true
    }).exec((err, result) => {
        if(err){
            return res.status(206).json({error:err})
        }
        else{
            res.status(200).json(result)
        }
    })
}


module.exports = likePost