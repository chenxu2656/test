// 创建一个博客
const {createEmi} = require('../../model/index')
module.exports = async (req,res)=>{
    const emiCon= req.body
    try {
        const emi = await createEmi(emiCon)
        if(emi) {
            res.status(200).json(emi)
        } else {
            res.status(500).json({
                'err': 'err'
            })
        }
    } catch(err) {
        res.status(500).json(err)
    }
    
}