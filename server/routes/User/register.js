const {createUser} = require('../../model/')
const { errorHandle } = require('../../model/tools/error')
module.exports = async(req,res,next)=>{
    try{
        let userInput = req.body
        let {username,email,password,role,status,avatar} = userInput
        let user = await createUser(username,email,password,role,status,avatar)
        res.status(200).json(user)
    }
    catch(err){
        if (err.code == 11000) {
            res.status(405).json(errorHandle({
                "code": 11000
            }))
        } else {
            res.status(405).json(err)
        }
        
    }
}