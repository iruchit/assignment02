let mongoose = require('mongoose');

//create a model class 
let contactModal = mongoose.Schema({
    name:String,
    number: Number,
    email: String
},
{
    collection:"Contacts"
})
module.exports=mongoose.model('Contact', contactModal)