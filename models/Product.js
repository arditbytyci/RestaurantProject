const db = require('../models/index');










module.exports = (sequelize, DataTypes) => {
    const product = sequelize.define("Product", {
      fileName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      productName: {
        type: DataTypes.STRING(60),
        allowNull: false,
        trim: true,
      }, 
      productDesc: {
        type: DataTypes.STRING,
        allowNull: true,
      }, 
      productPrice: {
        type: DataTypes.INTEGER,
        allowNull: false,        
      },
      productCategory: {
        type: DataTypes.INTEGER,
        allowNull: false,        
      },
      productQty: {
        type: DataTypes.INTEGER,
        allowNull: false,        
      },
      
      
    }, {timestamps: true});
    return product;
  }


 // Category.belongsTo(Product, { foreignKey: 'category_id' });
 




  
