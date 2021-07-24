const mongoose = require('mongoose')
const Post = mongoose.model('Post') 

const myPost = (req, res) => {
    Post.find({postedBy:req.user?._id})
    .populate('postedBy' , '_id name profilePicture')
    .populate("comments.postedBy" , "_id name profilePicture")
    .then(mypost => {
        res.status(200).json({mypost})
    })
    .catch(err => {
        console.log(err)
    })
}

module.exports = myPost