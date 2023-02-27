const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
   commentBody:{
      type:String,
      required:true
   },
   
   postId:{
    type:mongoose.Schema.Types.ObjectId,
    ref:'post',
    required:true
   }

},{timestamps:true});

module.exports=mongoose.model('comment', commentSchema)