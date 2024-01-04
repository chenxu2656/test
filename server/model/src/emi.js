const {emi} = require('../model')

const createEmi = async(obj)=>{
    const emiInfo = await emi.create(obj)
    return emiInfo
}
const emiList = async()=>{
    const emiList = await emi.find().sort({_id: -1})
    return emiList
}
const deleteems = async(id)=>{
    const emiList = await emi.deleteOne({_id:id})
    return emiList
}
module.exports = {
    emiList,
    createEmi,
    deleteems
}
