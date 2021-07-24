const mongoose = require('mongoose')
const Post = mongoose.model('Post') 
 
const createPost  = (req, res) => {
    const {title,body,pic} = req.body
    if(!title && !body && !pic){
        return res.status(206).json({error:"Please add all the fields"})
    }
    req.user.password = undefined
    const post = new Post({
        title,
        body,
        photo:pic,
        postedBy:req.user
    })
    post.save().then(result => { 
        res.status(201).json({post:result})
    })
    .catch(err =>{
        console.log(err)
    })
}

module.exports = createPost