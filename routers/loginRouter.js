const express = require('express');
const router = express.Router();

const House = require('../db/insertdata');
const theDataOfLogin = require('../Model/Login');
const mongoose = require('mongoose');

const db = mongoose.connection;
db.on('err', console.error.bind(console, 'collection errow'));
db.once('open', function () {

    console.log("connect")



    router.post('/login', (req, res) => {
        const us=req.body.username
        const pa=req.body.password
    console.log(`${us};lk`)
    theDataOfLogin.findOne({username:us ,password:pa})
           .then((result) => {
           
          
               res.json(result);
               console.log(result)
           });
           
      
   });  

   router.post('/register', (req, res) => {
    const user=new theDataOfLogin(req.body)
     user.save()
       .then((result) => {
       
      res.status(200).json(result)
           
       })
       
  .catch((err)=>{
      res.status(500).send({err})

  })
});  

//    theDataOfLogin.find({$or:[{username:us },{password:pa}]})

});



module.exports = router;