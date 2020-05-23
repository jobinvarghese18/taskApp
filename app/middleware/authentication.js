const jwt = require('jsonwebtoken')
const User = require('../models/users')
const authenticateUser = (req,res,next)=>{
    const token = req.header('Authorization').split(' ')[1]
    let tokenData
    console.log(token)
    try{
        tokenData = jwt.verify(token,'dct123')
        User.findById(tokenData._id)
        .then((user)=>{
            req.user = user
            next()
        })
        .catch((err)=>{
            res.json(err)
        })
        
    }
    catch(e){
        res.json(e.message)
    }
}

module.exports = {
    authenticateUser
}