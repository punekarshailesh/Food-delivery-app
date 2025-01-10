/* 
    schema 


*/

const mongoose=require('mongoose');


// Destructuring ho rhi hai
const { Schema } = mongoose;

// making schema for user

const UserSchema = new Schema(
    {
        name:{
            type:String,
            required:true
        },
        location:{
            type:String,
            required:true
        },
        email:{
            type:String,
            required:true
        },
        password:{
            type:String, 
            required:true
        },
        date:{
            type:Date,
            default:Date.now
        }
    }
);


// model wrapper for schema

module.exports = mongoose.model('user',UserSchema);