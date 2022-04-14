const mongoose = require('mongoose')
const createModel = (name,schema)=>{
    let dataSchema = new mongoose.Schema(schema)
    let modelName = mongoose.model(name,dataSchema)
    return modelName
}
module.exports = {
    createModel: createModel
}