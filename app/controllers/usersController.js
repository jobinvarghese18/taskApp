const User  = require('../models/users')
const usersController = {}
const jwt = require('jsonwebtoken')
const bcryptjs = require('bcryptjs')


usersController.register  = (req,res)=>{
    const body = req.body
    const user = new User(body)
    user.loginCount = 0
    bcryptjs.genSalt()
    .then((salt)=>{
        bcryptjs.hash(user.password,salt)
        .then((encrypted)=>{
            user.password = encrypted
            user.save()
            .then((user)=>{
                res.json(user)
            })
            .catch((err)=>{
                res.json(err)
            })
        })
    })
    
}

usersController.login = (req,res)=>{
    const body = req.body
    
    User.findOne({email:body.email})
    .then((user)=>{
        if(!user){
            res.json({
                errors:"Invalid e-mail or password "
            })
        }
        console.log(user)
        bcryptjs.compare(body.password,user.password)
        .then((macth)=>{
            if(macth){
            const tokenData = {
                _id:user.id,
                email:user.email,
                username:user.username
            }
            const token = jwt.sign(tokenData,'dct123',{
                expiresIn:'2d'
            })
            User.findByIdAndUpdate(user._id,{ $inc:{loginCount : 1}},{ new: true})
            .then((user)=>{
                res.json({
                    token:`Bearer ${token}`
                })
            })
            

            }
            else{
                res.json({
                    errors:"Invalid e-mail or password"
                })
            }
        })
    })

}
usersController.account = (req,res)=>{
    res.json(req.user)
}

module.exports = usersController