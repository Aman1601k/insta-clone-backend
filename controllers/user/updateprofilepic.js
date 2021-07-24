const mongoose = require('mongoose')
const User = mongoose.model('User') 


const updateprofilepic = (req,res) => {
    User.findByIdAndUpdate(
        req.user._id,
        { $set: { profilePicture: req.body.profilePicture } },
        { new: true },
        (err, result) => {
          result.password = undefined;
          if (err) {
            return res.status(206).json({ error });
          }
          return res.status(200).json({ result });
        }
      );
}

module.exports = updateprofilepic