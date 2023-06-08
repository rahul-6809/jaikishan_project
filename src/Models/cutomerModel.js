const mongoose = require("mongoose");
var uuid = require('uuid');
const UUIDs4 = uuid.v4;

const customerSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    mobileNumber: {
        type: String,
        required: true,
        unique: true,
        validate: {
            validator: function (value) {
                return value.length === 10;
            },
            message: 'Mobile number must be 10 characters long.'
        }
    },
    DOB: Date,
    emailID: {
        type: String,
        unique: true,
    },
    address: String,
    status: {
        type: String,
        enum: ["ACTIVE", "INACTIVE"],
        default : "ACTIVE"
    
}, customerID : {
    type : mongoose.Types.UUID,
    unique : true,
    default : UUIDs4
}
},{timestamps:true});

module.exports=mongoose.model("Customer",customerSchema)