const cardModel= require('../Models/cardModel');
const ObjectId=require('mongoose').Types.ObjectId;


const isValidCustomer = async function (customerId) {
    const customer = await cardModel.findById(customerId)
    if (customer) return true
    else return false
}

const createCard = async (req, res) => {
    try {
        const { cardType, customerName, vision, customerID } = req.body
        if (!cardType || !customerName || !vision || !customerID) return res.status(400).send({ status: false, message: 'Provide all the Details' })
        if(!["REGULAR", "SPECIAL"].includes(cardType)) return res.status(400).send({ status: false, message: ' CardType must be "REGULAR" or "SPECIAL"' })
        if (!isValidCustomer(customerID)) return res.status(400).send({ status: false, message: 'Invalid customer, Customer does not exist' })
        

        else{
            req.body.customerID = req.customerID
            let cardAvailable = await cardModel.find().count()
            cardAvailable = cardAvailable + 1
            req.body.cardNumber = "C00" + cardAvailable
            const card = await cardModel.create(req.body)
            res.status(201).send({ status: true, message: card })

        }
    }

catch(error){res.status(500).send({status:false,message:error.message})}
}

const getCard = async (req, res) => {
    try {
        const card = await cardModel.find({customerID: req.customerID})
        if(card.length ===0) return res.status(404).send({ status: false , message : 'Not Found any card' })
        res.status(200).send({ status: true, message: card })
    } catch (error) {
        res.status(500).send({ status: false, message: error.message })
    }
}


module.exports = { createCard, getCard }