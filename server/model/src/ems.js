const {ems} = require('../model')

const createems = async(obj)=>{
    const emsInfo = await ems.create(obj)
    return emsInfo
}
const emsList = async()=>{
    const emsList = await ems.find().sort({_id: -1})
    return emsList
}

module.exports = {
    emsList,
    createems
}
