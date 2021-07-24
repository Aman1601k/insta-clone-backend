const mongoose = require('mongoose')
const User = mongoose.model('User') 

const updatebio = (req,res) => {
    console.log('bioooooooooooooooooooooo',req.body.bio)
    User.findByIdAndUpdate(
        req.user._id,
        { $set: { bio: req.body.bio } },
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

module.exports = updatebio