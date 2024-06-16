const db = require('../models');



exports.getNewArrivals = async (req,res) => {



    const sortBy = req.query.sortBy ? req.query.sortBy : 'DESC';
    const limitDb = req.query.limit ? parseInt(req.query.limit) : parseInt(3);

    try {
        


        const Product = db.Product;


        


        const newArrivals = await Product.findAll({ 
            order : [
                ['createdAt', sortBy]
            ],
            limit: limitDb,
        });


        res.json({newArrivals});


    } catch (err) {


        console.log('get new arrivals controller error' , err);

        resizeBy.status(500).json({
            errorMessage: 'Please try again'
        })

    }



}

exports.searchByQueryType = async (req,res) => {


    const {type, query} = req.body;




    try {
        


        let products;


        switch (type) {
            case 'category':
                products = await db.Product.findAll({where : {productCategory: query}});
                
                break;
        
            
        }


        if(!products.length > 0) {
            products = await db.Product.findAll({});
        }
        

        res.json({products});
    } catch (err) {


        console.log('get new arrivals controller error' , err);

        resizeBy.status(500).json({
            errorMessage: 'Please try again'
        })

    }


}