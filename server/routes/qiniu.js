const express = require('express');
const router = express.Router();
// 上传至七牛云
router.post('/',require('./qiniu/uploadFile'))

module.exports = router;
