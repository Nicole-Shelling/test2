const express  = require('express')
const mongoose = require('mongoose')
const exphbs=require('express-handlebars')
const DbRoute=require('./routes/myFirstDb')
const PORT=process.env.PORT||3000
const app=express()
const path=require('path')
const hbs=exphbs.create({
    defaultLayout:'main',
    extname:'hbs'
})

app.engine('hbs', hbs.engine)
app.set('view engine', 'hbs')
app.set('views', 'views')
app.use(express.urlencoded({ extended: true}))
app.use(express.static(path.join(__dirname,'public')))
app.use(DbRoute)


async function start(){
    try{
        await mongoose.connect('mongodb+srv://EkatherNic:resrodiro155@cluster0.ylt8k.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',{
          useNewUrlParser:true,
          //useFindAndModify:false  
        })
        app.listen(PORT, ()=>{
            console.log('Server has been started')
        })
    }
    catch(e){
        console.log(e)
    }
}

start()
