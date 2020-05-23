const Task = require('../models/task')

//Get all Tasks
module.exports.list = (req,res)=>{
    Task.find({user:req.user._id})
    .then((tasks)=>{
        res.json(tasks)
    })
    .catch((err)=>{
        res.json(err)
    })
}
module.exports.create = (req,res)=>{
    const body = req.body
    const task = new Task(body)
    task.user = req.user._id
    task.save()
    .then((task)=>{
        res.json(task)
    })
    .catch((err)=>{
        res.json(err)
    })
}

module.exports.show = (req,res)=>{
    const id = req.params.id
    Task.findOne({_id:id, user:req.user._id})
    .then((task)=>{
        res.json(task)
    })
    .catch((err)=>{
        res.json(err)
    })
}

module.exports.update = (req,res)=>{
    const id = req.params.id
    const body = req.body
    Task.findOneAndUpdate({_id:id,user:req.user._id},body,{new:true})
    .then((task)=>{
        res.json(task)
    })
    .catch((err)=>{
        res.json(err)
    })
}

module.exports.destroy = (req,res)=>{
    const id = req.params.id
    Task.findByIdAndRemove({_id:id,user:req.user._id})
    .then((task)=>{
        res.json(task)
    })
    .catch((err)=>{
        res.json(err)
    })
}


module.exports.completed = (req,res)=>{
    Task.find({completed:true,user:req.user._id})
    .then((tasks)=>{
        res.json(tasks)
    })
    .catch((err)=>{
        res.json(err)
    })
}