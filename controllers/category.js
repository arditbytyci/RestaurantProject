const db = require('../models');



exports.create = async (req,res) => {

    const {category} = req.body;


  



    try {

        const categoryExist = await db.Category.findOne({where : {category}})

        if(categoryExist) {
            return res.status(400).json({
                errorMessage: `${category} already exists.`
            })
        }


        let newCategory = new db.Category();

        newCategory.category = category;

        newCategory = await newCategory.save();

        res.status(200).json({
            successMessage: `${newCategory.category} created!`,
        })
        
    } catch (err) {

        console.log('Category create error ', err);
        res.status(500).json({
            errorMessage: 'Server error',
        });
        
    }
    
}



exports.readAll = async (req,res) => {


    try {

        const categories = await db.Category.findAll();



       

        res.status(200).json({
            categories
        })
        
    } catch (err) {

        console.log('Category readAll error ', err);
        res.status(500).json({
            errorMessage: 'Server error',
        });
        
    }



 


    
}



