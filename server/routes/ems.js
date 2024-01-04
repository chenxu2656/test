// 操作文章
const express = require('express');
const router = express.Router();
// 获取文章列表
router.get('/',require('./ems/emslist.js'))
// 创建文章
router.post('/',require('./ems/createems.js'))
router.delete('/',require('./ems/createems.js'))
module.exports = router;
