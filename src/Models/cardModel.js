const mongoose = require("mongoose");
var UUID=mongoose.Types.UUID;


const cardSchema = new mongoose.Schema({
    cardNumber : String,
    cardType : {
        type : String,
        enum : ['REGULAR', 'SPECIAL']
    },
    customerName : String,
    status : {
        type : String,
        enum : ['ACTIVE', 'INACTIVE'],
        default : 'ACTIVE'
    },
    vision : String,
    customerID : {
        type : UUID,
        ref : 'Customer'
    }
},{timestamps:true});

module.exports = mongoose.model("Card",cardSchema);