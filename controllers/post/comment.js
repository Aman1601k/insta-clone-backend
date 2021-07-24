const mongoose = require('mongoose')
const Post = mongoose.model('Post') 

const comment = (req,res) => {
    const comment = {
        text:req.body.text,
        postedBy:req.user._id
    }
    Post.findByIdAndUpdate(req.body.postId , {
        $push:{comments:comment}
    },{
        new: true
    })
    .populate("comments.postedBy" , "_id name profilePicture")
    .populate("postedBy" , "_id name profilePicture")
    .exec((err, result) => {
        if(err){
            return res.status(206).json({error:err})
        }
        else{
            res.status(200).json(result)
        }
    })
}

module.exports = comment