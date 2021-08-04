const mongoose = require('mongoose')
const Post = mongoose.model('Post') 
const User = mongoose.model('User') 
 
const unsavePost  =  async (req, res) => {
    try {
      const user = await User.findByIdAndUpdate(req.user._id,
        {
          $pull: { savedPosts: req.body.id },
        },
        {new: true,}
      );
      return res.status(200).json(user.savedPosts);
    } catch (error) {
      console.log(error);
    }
  }

module.exports = unsavePost