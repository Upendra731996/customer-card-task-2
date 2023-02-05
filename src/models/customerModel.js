const { default: mongoose } = require("mongoose")
const mongodb=require("mongoose")

const customerSchema= new mongodb.Schema({

    firstName:{
        type:String,
        require:true
    },
    lastName:{
        type:String,
        
    },
    email:{
        type:String,
require:true,
unique:true
    },
    mobileNumber:{
        type:String,
        require:true,
        unique:true
    },
    DOB:{
type:Date

    },
    address:{
        type:String,
        require:true
    },
    customerId:{
        type:String,
        unique:true,
        require:true
    },
    status:{
        type:String,
        enum:["ACTIVE","INACTIVE"]
    }

},{timestamps:true})

module.exports=mongoose.model('customer',customerSchema)