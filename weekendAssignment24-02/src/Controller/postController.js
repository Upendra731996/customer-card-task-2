const postModel = require('../model/postModel')


// ====================== create product =====================

const createPost = async function (req, res) {
    try {

        let data = req.body
        

        let postData = await postModel.create(data)

        return res.status(201).send({ status: true, message: "Success" ,data: postData })


    }
    catch (error) {
        return res.status(500).send({ status: false, message: error.message })
    }
}

// -------------------- GET PRODUCT---------------------


const getpost = async function(req,res) {
    try{
     
        
        let product = await postModel.find()
        
        if(product.length == 0) return res.status(404).send({status:false,message:'No such product exist'})
      
         res.status(200).send({status:true,message:'Success',data:product})
        

    }catch(err) { return res.status(500).send({status: false, message: err.message})}
}

// -------------------- GET PRODUCT------------------------------







// -------------------- UPDATE PRODUCT---------------------


const updatePost = async (req,res) => {
    try {
        let userId = req.params.userId
        let info=req.body
let postId=info.postId
       

        let updateData = await postModel.findOneAndUpdate({_id:postId}, info, { new: true })
        return res.status(200).send({ status: true, data: updateData })


    } catch (error) {
        return res.status(500).send({ status: false, message : error.message })
    }
}



//  ============================= DELETE ================================

const deletepost = async function (req, res) {
    try {
        const userId = req.params.userId;

      
        const deletedProduct = await postModel.findOneAndUpdate({ _id: userId, isDeleted: false }, { isDeleted: true, deletedAt: Date.now() }, { new: true });
        if (!deletedProduct)
            return res.status(404).send({ status: false, message: `` })

        return res.status(200).send({ status: true, message: "Success", data: "" })
    } catch (error) {
        return res.status(500).send({ status: false, message: error.message });
    }


}
module.exports = { updatePost, createPost,getpost, deletepost }