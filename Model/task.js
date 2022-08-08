const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const data1 = new Schema({
    id: Number,
    contact: {
        name: String,
        phones: [Number, Number],
        mail: String
    },
    address: {
        street: String,
        number: Number,
        area: String,
        city: String
    },
    dates: Date,
    rent: Number,

    changearea: {
        street: String,
        number: Number,
        area: String,
        city: String
    },
    permanent: Boolean


})
   
const House=mongoose.model("House",data1);
module.exports=House;

