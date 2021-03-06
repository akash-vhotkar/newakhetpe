const mongoose = require('mongoose');
module.exports = mongoose.model("tambolauser",{
    name:{
        type:String,
        required: true
    },
    socketid: {
        type:String,
        required: true
    },
    usertype:{
        type:String,
        required: true

    },
    ticket: {
        type:Array,
        required: true
    },
    balanceticket: {
        type: Array,
        required: true
    },
    draw:{
        type:Array,
        required : true
    },
    roomid: {
        type:String,
        required: true
    },
    useramount : {
        type: Number ,
        required: true
    }
})