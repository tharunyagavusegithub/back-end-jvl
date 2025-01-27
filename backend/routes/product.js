const express=require('express');
const { getproducts } = require('./controller/productController');
const route= express.Router();

router.route('/products').get(getproducts);
router.route('/product/id').get(getproducts);

module.exports =router;


