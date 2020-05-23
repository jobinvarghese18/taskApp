const mongoose = require('mongoose')
const Schema = mongoose.Schema
const taskSchema = new Schema({
    title:{
        type:String,
        required:true,
        minlength: [3,"title should more than 3 character"]
    },
    createdAt:{
        type:Date,
        default:Date.now
    },
    completed:{
        type:Boolean,
        default:false
    },
    dueDate:{
        type:Date,
        required:true,
        //custom validation
        validate: {
            validator:function(value){
                return value >=new Date()
            },
            message:function(){
                return 'Due date cannot be less than today'
            }
        }
    },
    user:{
        type:Schema.Types.ObjectId,
        ref:'User',
        required:true
    }

})
taskSchema.pre('validate',function(next){
    console.log('pre validation fn called')
    next()
})
taskSchema.pre('save',function(next){
    console.log('pre save function called')
    next()
})

const Task = mongoose.model('Task',taskSchema)
module.exports =  Task