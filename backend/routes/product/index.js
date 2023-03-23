const express = require('express');
const { Get } = require('./Get');
const router = express.Router();

router.get('/getProduct',Get);

module.exports = router;