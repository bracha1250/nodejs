const express = require('express');
const router = express.Router();

const House = require('../db/insertdata');
const theDataOfHouses = require('../Model/House');
const mongoose = require('mongoose');

const db = mongoose.connection;
let connect="err"

db.on('err', console.error.bind(console, 'collection errow'));
db.once('open', function () {

    console.log("connect")
    
//הוספת דירה
router.post('/add', async (req, res) => {
    const blog=  new theDataOfHouses(req.body)
        blog.save()
     .then((result)  => {
        connect="connect"
        res.status(200).send({ connect });
       
        
     })
     .catch((err)=>{
         console.log('err')
         res.status(500).send({ connect });
     })

});
//שאילתות מורכבות
router.post('/', (req, res) => {
     const r=req.body.city
 console.log(`${r};lk`)
    theDataOfHouses.find({city:r})
        .then((result) => {
        
       
            res.json(result);
            console.log(result)
        });
   
});
    

});


module.exports = router;
