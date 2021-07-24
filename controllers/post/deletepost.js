const mongoose = require('mongoose')
const Post = mongoose.model('Post') 

const deletepost = (req,res) => {
    Post.findOne({_id:req.params.postId})
    .populate("postedBy" , "_id")
    .exec((err,post) => {
        if(err || !post){
            return res.status(206).json({error:err})
        } 
        if(post.postedBy._id.toString() === req.user._id.toString()){
            post.remove()
            .then(result => {
                res.status(200).json({message: "Successfully Deleted"})
            }).catch(err => {
                console.log(err)
            })
        }
    })
}
    
    
    
module.exports = deletepost
