const {model} = require("mongoose")

const OSchema = require("../schemas/OrderSchema")

const OrderModel = model("order",OSchema) ; 

module.exports = OrderModel;