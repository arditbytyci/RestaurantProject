const db = require('../models/index');










module.exports = (sequelize, DataTypes) => {
    const product = sequelize.define("Product", {
      id: {
        type: DataTypes.UUID,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
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
        type: DataTypes.UUID,
        allowNull: false,
        references: {
          model: 'Category',
          key: 'category'
        }
      },
    
      productQty: {
        type: DataTypes.INTEGER,
        allowNull: false,  
       
      },
      
      
    }, {timestamps: true});
    
    
    return product;
  }

  

 




  
