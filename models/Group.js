const{Schema,model} = require('mongoose')
const schema2 = new Schema({
    Name:{
        type: String,
        required: true,
    },
    Users:{
        type:[
        {userName: {
            type:String,
            //default:"Vasya"
        },
        role: String}          
        ],
       // default:[{userName:"Vasya",role:"main"}]
    }
})
module.exports=model('Groups',schema2)