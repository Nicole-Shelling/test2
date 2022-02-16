const{Schema,model} = require('mongoose')
const schema3 = new Schema({
    Users:{
        type:String,        
    }
})
module.exports=model('Table3',schema3)