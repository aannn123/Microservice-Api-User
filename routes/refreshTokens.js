const express = require('express');
const router = express.Router();

const refreshTokensHandlers = require('./handler/refresh_tokens')

router.post('/', refreshTokensHandlers.create)
router.get('/', refreshTokensHandlers.getToken)

module.exports = router;
