// 创建一个博客
const {createems} = require('../../model/index')
module.exports = async (req,res)=>{
    const emsCon= req.body
    try {
        const ems = await createems(emsCon)
        if(ems) {
            res.status(200).json(ems)
        } else {
            res.status(500).json({
                'err': 'err'
            })
        }
    } catch(err) {
        res.status(500).json(err)
    }
    
}