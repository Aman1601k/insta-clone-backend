
exports.signout = (req, res) => {

    res.clearCookie('token')
    res.status(200).json({message: 'Sign out successfully'})

}