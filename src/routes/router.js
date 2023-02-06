const express= require('express')
const route=express.Router()
const {customer, getData, deleteCustmer} = require('../controllers/customerController')
const {getCardData, createCard} = require('../controllers/cardController')

 route.post('/CreateCoustmer', customer)
 route.get('/CoustmerList', getData)
 route.delete('/CreateCoustmer/:custmerID', deleteCustmer)

 route.post('/createCard', createCard)
route.post('/CardList', getCardData)

module.exports=route;