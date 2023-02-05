const express= require('express')
const mongoose= require('mongoose')
const router=require('./routes/router')

const app=express()
app.use(express.json())
mongoose.set('strictQuery', true)
mongoose.connect('mongodb+srv://projects94:E35tUpfux9D87GOj@cluster0.m1ousdd.mongodb.net/backend-task-2',{
useNewUrlParser:true
})
.then(()=> console.log('mongoose connected'))
.catch((err)=>console.log(err))


app.use('/',router)

app.listen(3000,()=> console.log(`express is runnig on port 3000`))