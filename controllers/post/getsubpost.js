const mongoose = require('mongoose')
const Post = mongoose.model('Post') 

const getsubpost = (req,res) => {
    Post.find({
        $or:[{postedBy:req.user.following}, {postedBy:req.user._id}]    
    })
    .populate("postedBy" , "_id name profilePicture")
    .populate("comments.postedBy" , "_id name")
    .sort("-createdAt")
    .then(posts => {
        res.status(200).json({posts})
    })
    .catch(err => {
        console.log(err)
    })
    console.log(Post.createdAt)
}

module.exports = getsubpost