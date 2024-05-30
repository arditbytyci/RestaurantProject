const db = require('../models')



exports.create = async (req,res) => {

    const {category} = req.body;


  



    try {

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