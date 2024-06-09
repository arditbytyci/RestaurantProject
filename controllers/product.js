const db = require('../models');
const fs = require('fs');

exports.create = async (req,res) => {

        console.log('req.body' , req.body);
        console.log('req.file' , req.file);
        console.log('req.User' , req.User);


        const {filename} = req.file;

        
        const { productName, productDesc, productPrice, productCategory, productQty} = req.body;



        try {


                let product = new db.Product();

                product.fileName = filename;
                product.productName = productName;
                product.productDesc = productDesc;
                product.productPrice = productPrice;
                product.productCategory = productCategory;
                product.productQty = productQty;


                await product.save();





                res.json({
                    successMessage: `${productName} was created.`,
                    product,
                });



            
        } catch (err) {
            console.log(err, 'ProductController.create err');
            res.status(500).json({
                errorMessage: 'Please try again',
            });
            
        }


}



exports.readAll = async (req,res) => {
    

    try {

       //  const category = await db.Category.findAll({});

        

          


        const products = await db.Product. findAll({


            
            include: {
                model: db.Category,
                foreignKey: 'productCategory' ,
                attributes: ['id','category'],
            }


        })


        

       
       

        res.json({
            products,
            
            
        });
        

        
    } catch (err) {
        console.log(err, 'ProductController.readAll err');
        res.status(500).json({
            errorMessage: 'Please try again',
        });
    }

}

exports.delete = async (req,res) => {


    try {

   
        const productId = req.params.productId;
        
        const dbId = await db.Product.findOne({where : {id: productId}});
        const deletedProduct = await db.Product.destroy({where : {id : productId}});
        
       
        fs.unlink(`uploads/${dbId.fileName}`, err => {
			if (err) throw err;
			console.log(
				'Image successfully deleted from filesystem: ',
				dbId.fileName
			);
		});

        

        res.status(200).json(deletedProduct);


        
    } catch (err) {

        console.log('Product.delete error ', err);
        res.status(500).json({
            errorMessage: 'Server error',
        });
        
    }

}


exports.read = async (req,res) => {
    

    try {

        const productId = req.params.productId;

        const product = await db.Product.findOne({where : {id : productId}});



        res.json(product);

        
    } catch (err) {
        console.log(err, 'ProductController.read err');
        res.status(500).json({
            errorMessage: 'Please try again',
        });
    }

}