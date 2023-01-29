const {Model, DataTypes} = require('sequelize');
module.exports = (sequelize, DataTypes)=>{
    class CHCL_CHARACTER_CLASS extends Model{
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models){
            // associated models go here
        }
    }
    CHCL_CHARACTER_CLASS.init({
            CHCL_ID:{
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },

            GASY_ID: DataTypes.INTEGER(8),
            GACO_ID: DataTypes.INTEGER(8),
            CHCL_NAME: DataTypes.STRING,
            CHCL_DISPLAY_NAME: DataTypes.STRING,
            CHCL_DETAIL: DataTypes.STRING,
            CHCL_ORDER_VALUE: DataTypes.INTEGER(8),
            ST_CODE: DataTypes.STRING,
            LAST_MODIFIED_DATE: DataTypes.DATE,
            LAST_MODIFIED_BY: DataTypes.DATE,
        },
        {
            sequelize,
            modelName: 'FGGDATA',
            tableName: 'CHCL_CHARACTER_CLASS',
            createdAt: 'LAST_MODIFIED_DATE',
            updatedAt: 'LAST_MODIFIED_BY',
        }
    )
    return CHCL_CHARACTER_CLASS;
}