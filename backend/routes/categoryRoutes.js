const express = require('express');
const router = express.Router();
const {categoryValidations} = require('../validations/categoryValidations')
const categoryController = require('../controllers/categoryController')
router.post('/create-category',categoryValidations,categoryController.create);
module.exports = router;