const { where } = require('sequelize');
const db = require('../models');
const fs = require('fs');


exports.create = async (req,res) => {

      


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
        });


        

       
       

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


exports.readByCount = async (req, res) => {
	try {
		const products = await db.Product.findAll({

            include : {
                model: db.Category,
                attributes: ['category']
            },
            limit: 6

        })
			

		res.json({ products });
	} catch (err) {
		console.log(err, 'productController.readAll error');
		res.status(500).json({
			errorMessage: 'Please try again later',
		});
	}
};






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


exports.update = async (req,res) => {
    

    const productId = req.params.productId;
     //
     if (req.file !== undefined) {
		req.body.fileName = req.file.filename;
	}

    
    const Product = db.Product;

   

    const productCategory = await db.Product. findAll({


            
        include: {
            model: db.Category,
            foreignKey: 'productCategory' ,
            attributes: ['category'],
        }


    });

    const rb = req.body;

    const dbId = await db.Product.findOne({where : {id: productId}});

   const oldProduct = await Product.update( rb , {where : {id :productId}, include: {
    model: db.Category,
    foreignKey: 'productCategory' ,
    attributes: ['category'],
} });


   if (req.file !== undefined && req.file.filename !== dbId.fileName) {
    fs.unlink(`uploads/${dbId.fileName}`, err => {
        if (err) throw err;
        console.log('Image deleted from the filesystem');
    });
}


   res.json({
    successMessage: `${oldProduct} updated`
   })

}


