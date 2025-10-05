const {model} = require("mongoose");

const HSchema = require("../schemas/HoldingSchema");

const HoldingModel = new model("zholding",HSchema)

module.exports = HoldingModel

 

