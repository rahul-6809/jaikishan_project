const express= require('express')
const router=express.Router();
const { createCustomer, getCustomer, DeleteCustomer, customerLogin } =require('../Controllers/customerController');
const { getCard, createCard }=require('../Controllers/cardController');
const { authorizedCustomer } = require('../Middleware/auth.js')

router.post('/customer',createCustomer)
router.get('/customer', authorizedCustomer, getCustomer)
router.delete('/customer/:customerId',authorizedCustomer, DeleteCustomer)
router.post('/login', customerLogin)
router.post('/card',authorizedCustomer, createCard)
router.get('/card',authorizedCustomer, getCard)

module.exports=router;