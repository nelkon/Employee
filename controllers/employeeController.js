//into this : CRUD operation  with employees

const express = require('express');
var router = express.Router();


router.get('/',(req,res) => {
    res.render("employee/addOrEdit",{
        viewTitle:"Add Employee"
    });
});

router.post('/',(req,res) => {
    console.log(req.body);
    });




module.exports=router;