module.exports = (sequelize, DataTypes) => {
    const category = sequelize.define("Category", {
      id: {
        type: DataTypes.UUID,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },

      category: {
        type: DataTypes.STRING(50),
        allowNull: false,
        trim: true,
        
        
      }
        
      
      
    }, {timestamps: true});

   
    return category;
  }