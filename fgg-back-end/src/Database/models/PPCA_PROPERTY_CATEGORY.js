// PPCA_PROPERTY_CATEGORY
const {Model, DataTypes} = require('sequelize');
module.exports = (sequelize, DataTypes)=>{
    class PPCA_PROPERTY_CATEGORY extends Model{
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models){
            // associated models go here
        }
    }
    PPCA_PROPERTY_CATEGORY.init({
            PPCA_ID:{
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            //: DataTypes.STRING,
            //: DataTypes.INTEGER(8),
            GASY_ID: DataTypes.INTEGER(8),
            PPCA_NAME: DataTypes.STRING,
            PPCA_DETAIL: DataTypes.STRING,
            PPCA_DISPLAY_NAME: DataTypes.STRING,

            ST_CODE: DataTypes.STRING,
            LAST_MODIFIED_DATE: DataTypes.DATE,
            LAST_MODIFIED_BY: DataTypes.DATE,

            PPCA_ORDER_VALUE: DataTypes.INTEGER(2),

        },
        {
            sequelize,
            modelName: 'FGGDATA',
            tableName: 'PPCA_PROPERTY_CATEGORY',
            createdAt: 'LAST_MODIFIED_DATE',
            updatedAt: 'LAST_MODIFIED_BY',
        }
    )
    return PPCA_PROPERTY_CATEGORY;
}