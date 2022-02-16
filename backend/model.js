const mongoose=require('mongoose');
const Schema=mongoose.Schema;

const UserSchema=new Schema({

    user:{
        type:String,
        required:true
    },
    userName:{
        type:String,
        required:true
    }
})

module.exports=mongoose.model('UserData',UserSchema,'Users1');