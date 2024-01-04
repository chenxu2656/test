const errCode = {
    "repeat": {
        'msg': "创建文档时出现重复",
        'errCode': '11000',
    }
}
const errorHandle = (err) => {
    const code = err.code
    switch (code) {
        case 11000 :
            return errCode.repeat
        default:
            return {
                'errMsg': "错误未被定义"
            }
    }
}
module.exports = {
    errorHandle
}