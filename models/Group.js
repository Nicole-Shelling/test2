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
        },
        role: String}          
        ],
    }
})
module.exports=model('Groups',schema2)