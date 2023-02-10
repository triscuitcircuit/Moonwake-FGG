const {Model, DataTypes} = require('sequelize');
const db = require("./index");
module.exports = (sequelize, DataTypes)=>{
    class AB_ATTRIBUTE extends Model{
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models){
            this.hasMany(models.MOAB_MONSTER_ATTRIBUTE,{
                foreignKey: "AB_ID"
            })
            // associated models go here
        }
    }
    AB_ATTRIBUTE.init({
        AB_ID:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        GASY_ID: DataTypes.INTEGER(8),
        AB_NAME: DataTypes.STRING,
        AB_DETAIL: DataTypes.STRING,
        AB_DISPLAY_NAME: DataTypes.STRING,
        AB_VALUE: DataTypes.INTEGER,
        AB_BONUS_VALUE: DataTypes.INTEGER,
        LAST_MODIFIED_DATE: DataTypes.DATE,
        LAST_MODIFIED_BY: DataTypes.DATE,
        ABCA_ID: DataTypes.INTEGER,
    },
    {
        sequelize,
        modelName: 'FGGDATA',
        tableName: 'AB_ATTRIBUTE',
        createdAt: 'LAST_MODIFIED_DATE',
        updatedAt: 'LAST_MODIFIED_BY',
    }
    )
    return AB_ATTRIBUTE;
}