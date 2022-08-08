
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const blogSchema=new Schema ({

    name: String,
    phone1: String,
    phone2: String,
    
    city: String,
    area: String,
    address: String,
    numHouse: String,

    amountOfBeds:String,
    elevators:String,
    floor:String,
    comment:String
  })
const House=mongoose.model("House",blogSchema);
module.exports=House;
