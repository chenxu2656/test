// 操作文件夹
const express = require('express');
const router = express.Router();
// 获取文件夹列表
router.get('/',require('./emi/emilist'))
// 创建文件夹
router.post('/',require('./emi/createemi'))
// 查询文件夹

module.exports = router;
