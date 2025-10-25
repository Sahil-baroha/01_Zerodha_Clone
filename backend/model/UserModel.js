const mongoose = require("mongoose")
const Schema = mongoose.Schema
const passportLocalMongoose = require("passport-local-mongoose")
// const { DefaultContext } = require("react-icons")



const UserSchema = new Schema({
    email:{
        type:String,
        required:true
    }, 
    Balance:{
        type:Number,
        default:10000
    }                      
})

UserSchema.plugin(passportLocalMongoose)


module.exports = mongoose.model("User",UserSchema)