const commentModel = require('../model/commentModel')

const createComment = async function (req, res) {
    try {
      let data = req.body;
      
  
      let savedData = await commentModel.create(data);
  
     return res.status(201).send({ status: true, data: savedData });
  
    } catch (error) {
     return  res.status(500).send({ status: false, error: error.message });
    }
  };
  module.exports={createComment}