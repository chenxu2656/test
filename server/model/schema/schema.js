const userStructure = { 
    username: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true,
        unique: true   // 保证邮箱唯一
    },
    password: {
        type: String,
        require: true
    },
    ctime: {
        type: Date,
        default: Date.now
    },
    avatar: {
        type: String,
    },
    role: {
        type: String,
        default: "admin"    // admin | user
    },
    status: {
        type: String, 
        default: "active"    //active | inactive
    }
}
const emsStructure = {
    daihao: {
        type: String,
        require: true
    },
    xinghao: {
        type: String,
        default: Date.now
    },
    fengzhuang: {
        type: String,
        require: true
    },
    ceshi: {
        type: String,
        require: true
    },
    cd: {
        type: String,
        require: false
    },
    ad: {
        type: String,
        require: true
    },
    esd: {
        type: String,
        require: false
    },
    eft: {
        type: String,
        require: false
    },
    ceshiren: {
        type: String,
        require: false
    }
}
// 文件夹 
const emiStructure = {
    daihao: {
        type: String,
        require: true
    },
    xinghao: {
        type: String,
        default: Date.now
    },
    fengzhuang: {
        type: String,
        require: true
    },
    dbuv15: {
        type: String,
        require: true
    },
    dbuv30: {
        type: String,
        require: false
    },
    dbuv130: {
        type: String,
        require: true
    },
    dbuv3g: {
        type: String,
        require: false
    },
    xianzhidbuv: {
        type: String,
        require: false
    },
    ceshiren: {
        type: String,
        require: false
    }
}
module.exports = {
    userStructure,
    emsStructure,
    emiStructure
}