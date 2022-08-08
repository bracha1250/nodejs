const express = require('express');
const router = express.Router();


const accountSid = 'AC6f4b17eaff852d30216df3b3387bccc0';
const authToken = 'e2acad866112e3a23b8738ecade4f726';
const client = require('twilio')(accountSid, authToken);
let p
// שליחת קוד
router.post('/phone',async(req,res)=>{
    p=req.body.phone;
    p=p.substr(1,10)
    p=`+972${p}`
    console.log(p)
       client.verify.services('VA4be0c39df254eda09c804ab4e73c8bdf')
             .verifications
             .create({to:p, channel: 'call'})
             .then(verification => {console.log(verification.status)
            res.send(verification.status)})
            .catch(err=>{
                console.log(err.status)
                res.send({err})
            })

})
// בדיקת קוד 
router.post('/checkPassword',async(req,res)=>{
    
client.verify.services('VA4be0c39df254eda09c804ab4e73c8bdf')
      .verificationChecks
      .create({to:p, code: req.body.cod})
      .then(verification_check => {
          console.log(verification_check.valid);
      res.send(verification_check.valid)
    })

})





             module.exports = router;