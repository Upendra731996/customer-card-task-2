const customerModel= require('../models/customerModel')


const customer= async function(req,res){
    try{


    let data=req.body

    let customerData= await customerModel.create(data)
        
       return res.status(201).send({status:true, data:customerData})


    
  }
    catch(err){
return res.status(500).send({status:false,msg:err.message})
    }
}


const getData = async function(req,res){
    try{

let data= req.body


let customerData= await customerModel.find()
res.status(200).send({status:true, data:customerData})




    }
    catch(err){
        return res.status(500).send({status:false, msg:err.message})
    }
}