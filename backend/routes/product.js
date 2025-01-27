const express=require('express');
const { getproducts, getSingleproduct } = require('../controller/productController');
const route= express.Router();

router.route('/products').get(getproducts);
router.route('/product/id').get(getSingleproduct);

module.exports =router;


