const {Model, DataTypes} = require('sequelize');
module.exports = (sequelize, DataTypes)=>{
    class ABCA_ATTRIBUTE extends Model{
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models){
            // associated models go here
        }
    }
    ABCA_ATTRIBUTE.init({
            GASY_ID:{
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            ABCA_ID: DataTypes.INTEGER(8),
            ABCA_NAME: DataTypes.STRING,
            ABCA_SHORT_NAME: DataTypes.STRING,
            ABCA_DETAIL: DataTypes.STRING,
            ABCA_DISPLAY_NAME: DataTypes.STRING,
            ST_CODE: DataTypes.STRING,
            LAST_MODIFIED_DATE: DataTypes.DATE,
            LAST_MODIFIED_BY: DataTypes.DATE,
        },
        {
            sequelize,
            modelName: 'FGGDATA',
            tableName: 'ABCA_ATTRIBUTE_CATEGORY',
            createdAt: 'LAST_MODIFIED_DATE',
            updatedAt: 'LAST_MODIFIED_BY',
        }
    )
    return ABCA_ATTRIBUTE;
}