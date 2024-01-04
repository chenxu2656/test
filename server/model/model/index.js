const {createModel} = require('../tools/optool')
const mongoose = require('mongoose')
// const createModel = (name,schema,collectionName)=>{
//     let dataSchema = new mongoose.Schema(schema,{
//         collection: collectionName
//     })
//     let modelName = mongoose.model(name,dataSchema)
//     return modelName
// }
// module.exports = {
//     createModel: createModel
// }
const  {
        userStructure,
        emsStructure,
        emiStructure,
    } = require('../schema/schema')
// 文章
const ems = createModel('emsStructure',emsStructure)
// 文件夹
const emi = createModel('emiStructure',emiStructure)
// 用户
const userSchema = new mongoose.Schema(userStructure,{strict: false})
const Users = createModel('user',userSchema)

module.exports = {
    ems,
    emi,
    Users
}