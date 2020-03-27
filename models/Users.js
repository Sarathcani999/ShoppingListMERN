const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    username : {
        type : String ,
        required : true
    } ,
    password : {
        type : String ,
        required : true
    } ,
    name : {
        type : String ,
        required : true
    } ,
    dob : {
        type : Date ,
        default : Date.now()
    }
});


module.exports = Users = mongoose.model('user' , UserSchema)