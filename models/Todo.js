const{Schema,model} = require('mongoose')
const schema = new Schema({
    title:{
        type: String,
        required: true,
    },
    a1:String,
    a2:String,
    a3:String,
    a4:String,
    a5:String,
    a6:String,
    a7:String,
    a8:String,
})
module.exports=model('Todo',schema)

