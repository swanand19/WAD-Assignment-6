const expres=require('express');
const Employee = require('../model/employee.model');
const bodyParser = require('body-parser');
var jsonParser =  bodyParser.json()
var router= expres.Router();

router.post('/create', jsonParser, (req,res)=>{
    Employee.create(req.body);
    res.status(201).json({
        status:"success"
    })
})

router.get('/display', jsonParser, async(req,res)=>{
    const newemp=await Employee.find();
    res.status(200).json({
        staus:"success", 
        data:{newemp}
    })
})

module.exports=router;