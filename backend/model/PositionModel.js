const {model} = require("mongoose")

const PSchema = require("../schemas/PositionSchema")

const PositionModel = model("position",PSchema) ; 

module.exports = PositionModel;