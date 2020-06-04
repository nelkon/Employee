//into this : CRUD operation  with employees

const express = require('express');
var router = express.Router();


router.get('/',(req,res) => {
    res.json('Sample text');
});
module.exports=router;