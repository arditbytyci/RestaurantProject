const db = require('../models');



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