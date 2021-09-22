const mongoose = require("mongoose");

const Person = mongoose.model('Person',{
    name:{type:String, required:true},
    place:{type:String},
    state:{type:String},
    pin:{type:Number}
    
},"persons");   //"persons"

module.exports = { Person };