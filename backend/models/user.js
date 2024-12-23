const mongoose = require('mongoose')

const details = new mongoose.Schema({
    moviename : {type :String,required:true},
   time :{type:String,required :true},
    seat :{type:String,required :true },
    name:{type:String,required :true},
    phoneno :{type:Number,required :true},
    email:{type:String,required :true},
    payment :{type:Number,required :true}
}
)


module.exports = mongoose.model('user',details)