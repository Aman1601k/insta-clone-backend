const mongoose = require('mongoose')
const Post = mongoose.model('Post') 

const deletecomment = (req,res) => {
    const {commentId} =  req.params;
    const {postId} =  req.params;
    Post.findByIdAndUpdate(postId,{
            $pull:{comments:{_id:commentId}}
        },{
            new:true,
        })
    .populate("comments" , "_id")
    .exec((err, result) => {
            if(err){
                return res.status(206).json({error:err})
            }
            else{
                res.status(200).json(result)
            }
        })
}
    
module.exports = deletecomment