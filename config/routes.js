const express = require('express')
const router = express.Router()
const taskController = require('../app/controllers/taskController')
const employeesController = require('../app/controllers/employeesController')
const usersController = require('../app/controllers/usersController')
const {authenticateUser} = require('../app/middleware/authentication')

router.get('/tasks',authenticateUser,taskController.list)
router.post('/tasks',authenticateUser, taskController.create)
router.get('/tasks/completed',authenticateUser,taskController.completed)
router.get('/tasks/:id',authenticateUser,taskController.show)
router.put('/tasks/:id',authenticateUser, taskController.update)
router.delete('/tasks/:id',authenticateUser, taskController.destroy)

router.post('/user/register',usersController.register)
router.post('/user/login',usersController.login)
router.get('/user/account',authenticateUser,usersController.account)


router.get('/employees',employeesController.list)
router.post('/employees',employeesController.create)

module.exports = router 