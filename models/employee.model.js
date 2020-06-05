const mongoose = require('mongoose');

var employeeSchema = new mongoose.Schema({
    fullName:{
        type:String,
        required: 'This Field is required.'
    },
    email:{
        type:String
    },
    mobile:{
        type:String
    },
    city:{
        type:String
    }});

    //custom validation for mail
    employeeSchema.path('email').validate((val) =>{
        emailRegex=/^(?=.{1,254}$)(?=.{1,64}@)[-!#$%&'*+/0-9=?A-Z^_`a-z{|}~]+(\.[-!#$%&'*+/0-9=?A-Z^_`a-z{|}~]+)*@[A-Za-z0-9]([A-Za-z0-9-]{0,61}[A-Za-z0-9])?(\.[A-Za-z0-9]([A-Za-z0-9-]{0,61}[A-Za-z0-9])?)*$/;
        return emailRegex.test(val);
    },'Invalid - email');
mongoose.model('Employee',employeeSchema);