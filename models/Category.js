module.exports = (sequelize, DataTypes) => {
    const category = sequelize.define("Category", {
      category: {
        type: DataTypes.STRING(50),
        allowNull: false,
        trim: true,
        
        
      }
        
      
      
    }, {timestamps: true});
    return category;
  }