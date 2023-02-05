const express= require('express')
const route=express.Router()


route.get('/name', function(req,res){
    console.log("test me")
})

module.exports=route;