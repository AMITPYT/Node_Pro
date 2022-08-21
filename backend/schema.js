const mongoose = require("mongoose");  
// const validator = require("validator");
const { Schema } = mongoose;

const InfoSchema = new Schema({
    no:{
        type: Number,
        
    },
    name:{
        type: String,
        requried: true
    },
    last:{
        type: Number,
        requried: true
        
    },
    buy:{
        type: Number,
        requried: true,
    },
    sell:{
        type: Number,
        requried: true
    },
    volume:{
        type: Number,
        requried: true
    },
    base_unit:{
        type: String,Number,
        requried: true
    }

})

const PersonData = new mongoose.model('CryptoData', InfoSchema );
module.exports = PersonData;