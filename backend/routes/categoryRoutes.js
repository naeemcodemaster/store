const express = require('express');
const router = express.Router();
const {categoryValidations} = require('../validations/categoryValidations')
const categoryController = require('../controllers/categoryController')
const Authorization = require('../services/Authorization');

router.post('/create-category',[categoryValidations,Authorization.authorized],categoryController.create);
router.get('/categories/:page',Authorization.authorized,categoryController.categories);



module.exports = router;