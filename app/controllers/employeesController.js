const Employee = require('../models/employee')
const employeesController = {}

employeesController.list = (req,res)=>{
    Employee.find()
    .then((employees)=>{
        res.json(employees)
    })
    .catch((err)=>{
        res.json(err)
    })
}
employeesController.create = (req,res)=>{
    const body = req.body
    console.log(body)
    const employee = new Employee(body)
    employee.save()
    .then((employee)=>{
        res.json(employee)
    })
    .catch((err)=>{
        res.json(err)
    })
}

module.exports = employeesController