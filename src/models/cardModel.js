const mongoose=require('mongoose')
const objectId=mongoose.Schema.Types.ObjectId

const cardSchema=new mongoose.Schema({

cardNumber:{
    type:String,
    require:true,
    unique:true
},
cardType:{
    type:String,
    require:true,
    enum:["regular","special"]
    
},
customerName:{
    type:String,
    require:true
    
},
status:{
    type:String,
    require:true,
    default: "ACTIVE",
    enum:["ACTIVE","INACTIVE"]
},
vision:{
    type:String,
    require:true
},
customerId:{
    type:objectId,
    require:true,
    ref:"customer"
}


},{timestamps:true})

module.exports=mongoose.model("card",cardSchema)