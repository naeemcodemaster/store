const {validationResult} = require('express-validator');
const CategoryModel = require('../models/Category');
class Category {
    async create(req,res){
        const errors = validationResult(req);

        if(errors.isEmpty()){
            const {name} = req.body;
            const exist = await CategoryModel.findOne({name});
            if(!exist){
                await CategoryModel.create({name});
                return res.status(201).json({message:'Category has been created'});
            }else{
                return res.status(401).json({errors:[{msg:`${name} category is already exist`}]})
            }

        }else{
            return res.status(401).json({errors:errors.array()})
        }
    }
    async categories(req,res){
        const page = req.params.page;
        const perPage = 3;
        const skip = (page - 1) * perPage;
        try {
            const count = await CategoryModel.find({}).countDocuments();
            const response = await CategoryModel.find({}).skip(skip).limit(perPage).sort({updatedAt:-1});
            return res.status(200).json({categories:response,perPage,count});
            console.log(response);

        } catch (error) {
            console.log(error.message);
        }
    }
}

module.exports = new Category;