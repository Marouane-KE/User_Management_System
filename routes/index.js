const express = require('express');
const router = express.Router();
const { exampleController } = require('../controllers');

router.get('/', exampleController);

module.exports = router;
