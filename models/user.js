const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
    first_name: {
        type: String,
        required:true
    },
    last_name:{
        type: String,
        required:true
    },
    full_name:{
        type: String,
        required:true
    },
    email:{
        type: String,
        required:true
    },
    password:{
        type: String,
        required:true
    },
    email_verified:{
        type: Boolean,
        default:false
    },
    is_active:{
        type: Boolean,
        default:false
    }
},{timestamps:true});

const User = mongoose.model('User',userSchema);
module.exports = User;