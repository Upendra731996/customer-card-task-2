const customerModel = require('../models/customerModel')
const uuid = require('uuid')
const mongoose = require("mongoose")


const customer = async function (req, res) {
    try {
        let data = req.body
        const fields = ['firstName','email','mobileNumber','DOB','address','status']
        for (const field of fields) {
            if(!data[field]){
                return res.status(400).send({status: false, msg : `please provide required field -->${field}`})
            }
        }
      if (!/^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/.test(data.email)) {
        return res.status(400).send({status: false, msg : `please provide valid email`})
      }
      if (!/^(?:(?:\+|0{0,2})91(\s*[\-]\s*)?|[0]?)?[6789]\d{9}$/.test(data.mobileNumber)) {
        return res.status(400).send({status: false, msg : `please provide valid mobileNumber`})
      }
      data.customerId = uuid.v4()
      data.DOB = new Date(data.DOB)
        let customerData = await customerModel.create(data)

        return res.status(201).send({ status: true, data: customerData })
    }
    catch (err) {
        return res.status(500).send({ status: false, msg: err.message })
    }
}


const getData = async function (req, res) {
    try {

        let customerData = await customerModel.find({status: 'ACTIVE'})

        return res.status(200).send({ status: true, data: customerData })
    }
    catch (err) {
        return res.status(500).send({ status: false, msg: err.message })
    }
}

const deleteCustmer = async function(req, res){
        try {
            let CoustmerID = req.params
            let customerData = await customerModel.findByIdAndUpdate({_id: CoustmerID},{$set: {status: "INACTIVE"}})
            return res.status(200).send({ status: true, msg: "deleted succesfully"})
        } catch (err) {
            return res.status(500).send({ status: false, msg: err.message })
        }
}


module.exports = {customer, getData, deleteCustmer}