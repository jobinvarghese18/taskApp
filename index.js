const express = require('express')
const port =  3035
const app = express()
const cors =  require('cors')
const mongoose = require('mongoose')

app.use(cors())
///setup db
const configureStore = require('./config/database')
app.use(function(req,res,next){
  console.log(`${req.ip} - ${req.method} - ${req.url} - ${new Date()}
  ${JSON.stringify(req.body)} `)
  next()
})
configureStore()
//enable express to parse json data
app.use(express.json())

const routes =  require('./config/routes')
app.use('/',routes)

app.listen(port,()=>{
    console.log('Connected to port',port)
})







// const express = require('express')
// const app = express()
// const port = 3035
// const cors = require('cors')
// const mongoose = require('mongoose')
// const config = {
//     useNewUrlParser: true ,
//      useUnifiedTopology: true
// }

// app.use(express.json())
// app.use(cors())

// mongoose.connect('mongodb://localhost:27017/task-db',{config})
// .then(()=>{
//     console.log('connected to db')
// })
// .catch((err)=>{
//     console.log(err)
// })

// const Schema = mongoose.Schema
// // id title  createdOn Duedate completed

// const taskSchema = new Schema({
//     title:{
//         type:String,
//         required:true
//     },
//     createdOn:{
//         type:Date,
//         default:Date.now
//     },
//     completed:{
//         type:Boolean,
//         default:false
//     },
//     dueDate:{
//         type:Date,
//         required:true
//     }
// })

// const Task =  mongoose.model('Task',taskSchema)
// //GET - fetch Task information
// app.get('/tasks',(req,res)=>{
//     console.log('hii')
//     Task.find()
//     .then((tasks)=>{
//         res.json(tasks)
//     })
//     .catch((err)=>{
//         res.json(err)
//     })
// })

// //POST Insert data to the Task information
// app.post('/tasks',(req,res)=>{
//     const body = req.body
//     const task  = new Task(body)
//     task.save()
//     .then((task)=>{
//         res.json(task)
//     })
//     .catch((err)=>{
//         res.json(err)
//     })
// })
// //Delete Task
// app.delete('/tasks/:id',(req,res)=>{
//     const id = req.params.id
//     Task.findByIdAndDelete(id)
//     .then((task)=>{
//         res.json(task)
//     })
//     .catch((err)=>{
//         res.json(err)
//     })
// })
// //Update Task
// app.put('/tasks/:id',(req,res)=>{
//     const id = req.params.id
//     const body = req.body
//     Task.findByIdAndUpdate(id,body,{ new :true ,runValidators:true})
//     .then((task)=>{
//         res.json(task)
//     })
//     .catch((err)=>{
//         res.json(err)
//     })
// })
// app.listen(port,()=>{
//     console.log('Listening to port ',port)
// })
