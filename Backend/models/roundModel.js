const mongoose = require('mongoose')
const stadiumSchema = require('../models/stadiumModel')

const roundSchema = mongoose.Schema({
    _id: mongoose.Types.ObjectId,
    round:{type:Number,required:true,unique:true},
    game1:{team1:{type:String,required:true},score1:{type:Number,default:null},team2:{type:String,required:true},score2:{type:Number,default:null},arena:{type:String},time:{type:Date,default:null}},
    game2:{team1:{type:String,required:true},score1:{type:Number,default:null},team2:{type:String,required:true},score2:{type:Number,default:null},arena:{type:String},time:{type:Date,default:null}},
    game2:{team1:{type:String,required:true},score1:{type:Number,default:null},team2:{type:String,required:true},score2:{type:Number,default:null},arena:{type:String},time:{type:Date,default:null}},
    game3:{team1:{type:String,required:true},score1:{type:Number,default:null},team2:{type:String,required:true},score2:{type:Number,default:null},arena:{type:String},time:{type:Date,default:null}},
    game4:{team1:{type:String,required:true},score1:{type:Number,default:null},team2:{type:String,required:true},score2:{type:Number,default:null},arena:{type:String},time:{type:Date,default:null}},
    game5:{team1:{type:String,required:true},score1:{type:Number,default:null},team2:{type:String,required:true},score2:{type:Number,default:null},arena:{type:String},time:{type:Date,default:null}},
    game6:{team1:{type:String,required:true},score1:{type:Number,default:null},team2:{type:String,required:true},score2:{type:Number,default:null},arena:{type:String},time:{type:Date,default:null}},
    game7:{team1:{type:String,required:true},score1:{type:Number,default:null},team2:{type:String,required:true},score2:{type:Number,default:null},arena:{type:String},time:{type:Date,default:null}},
    game8:{team1:{type:String,required:true},score1:{type:Number,default:null},team2:{type:String,required:true},score2:{type:Number,default:null},arena:{type:String},time:{type:Date,default:null}},
    game9:{team1:{type:String,required:true},score1:{type:Number,default:null},team2:{type:String,required:true},score2:{type:Number,default:null},arena:{type:String},time:{type:Date,default:null}},
    game10:{team1:{type:String,required:true},score1:{type:Number,default:null},team2:{type:String,required:true},score2:{type:Number,default:null},arena:{type:String},time:{type:Date,default:null}},
    
},{timestamps:true})

module.exports = mongoose.model('round',roundSchema)