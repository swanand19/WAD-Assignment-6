const mongoose = require('mongoose');
var employeeSchema = new mongoose.Schema({
    name:{
        type: String
    }, 
    number:{
        type:Number
    }
});

const Employee=mongoose.model('employee', employeeSchema);
module.exports=Employee