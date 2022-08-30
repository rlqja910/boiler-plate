const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name:{
        type : String,
        maxlength : 50,
    },
    emial: {
        type: String,
        trim: true,
        unique: 1,
    },
    password:{
        type:String,
        minlength:5
    },
    lastname:{
        type:String,
        maxlength:50
    },
    role:{
        type:Number, //1:관리자 2:일반유저
        default : 0
    },
    image : String,
    token:{
        type:String
    },
    tokenExp:{
        type:Number
    }
})

const User = mongooose.model('User',userSchema)

module.exports = {User}