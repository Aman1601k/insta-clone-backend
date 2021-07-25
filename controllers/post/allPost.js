const mongoose = require('mongoose')
const Post = mongoose.model('Post') 

const allPost = (req,res) => {
    Post.find()
    // Post.find({postedBy: { $ne : req.user._id }})
    .populate("postedBy" , "_id name profilePicture")
    .populate("comments.postedBy" , "_id name profilePicture")
    .sort("-createdAt")
    .then(posts => {
        res.status(200).json({posts})
    })
    .catch(err => {
        console.log(err)
    })
    console.log(Post.createdAt)
}

module.exports = allPost