const express = require('express');
const router = express.Router();
const  { getAllPrroducts,getAllPrroductsStatic } = require('../controllers/products');
router.route('/').get(getAllPrroducts);
router.route('/static').get(getAllPrroductsStatic);

module.exports = router;