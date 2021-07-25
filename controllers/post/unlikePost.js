const mongoose = require('mongoose')
const Post = mongoose.model('Post')  

const unlikePost = (req,res) => {
    
    Post.findByIdAndUpdate(req.body.postId , {
        $pull:{likes:req.user._id}
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


module.exports = unlikePost