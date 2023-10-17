const mongoose = require('mongoose')

const stadiumSchema = new mongoose.Schema({
    _id:mongoose.Types.ObjectId,
    name:{type:String,required:true,unique:true},
    city:{type:String,required:true},
    state:{type:String,required:true}
},
{timestamps:true})

module.exports = mongoose.model('stadium',stadiumSchema)