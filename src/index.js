const express=require('express')
const app = express()
const mongoose=require('mongoose')
const routers=require('./route/route.js')
const{MONGOOSE_CONNECTION,PORT}=require('../config')

app.use(express.json())
app.use(express.urlencoded({ extended:true}))

    mongoose.connect(MONGOOSE_CONNECTION,{useNewUrlParser:true})
    .then(()=>console.log("MongoDb is connected"))
    .catch(error=>error.message)




    app.use('/',routers)

    app.listen(PORT||4200 ,()=>{console.log("Express app running on Port" ,PORT ||4200)})