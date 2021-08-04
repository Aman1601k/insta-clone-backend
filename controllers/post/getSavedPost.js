const mongoose = require('mongoose')
const Post = mongoose.model('Post') 
 
const getSavedPost  = (req, res) => {
    const ids = req.body.ids
    try {
      if(ids.length === 0) {
        return ;
      }
      Post.find({
        _id: {
          $in: ids,
        },
      })
        .populate('postedBy', '_id name profilePicture')
        .then((post) => {
          return res.status(200).json(post);
        });
    } catch (error) {
      console.log(error);
    }
  }

module.exports = getSavedPost