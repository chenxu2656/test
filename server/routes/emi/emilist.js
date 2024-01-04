// 获取所有的文章列表
const {emiList} = require('../../model/index')
module.exports = async(req,res)=>{
    let query =  {}
    const resp  = await emiList(query)
    if(req.query.count == 'true') {
        res.status(200).json(resp)
    } else {
        if(resp.length > 0) {
            res.status(200).json(resp)
        }else{
            res.status(200).json([])
        }
    }
    
}