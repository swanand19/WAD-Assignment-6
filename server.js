const mongoose = require("mongoose")

mongoose.connect("mongodb+srv://kbtug20399:N2QX5Rkn8Fyuqp56@cluster0.llxnpak.mongodb.net/?retryWrites=true&w=majority")
.then(() => console.log('Connected Successfully!'))

const employeeController=require('./controllers/employeeController')
const express = require("express");
const app = express();

app.use('/employee', employeeController)
app.listen(8080);