const {Model, DataTypes} = require('sequelize');
module.exports = (sequelize, DataTypes)=>{
    class ATCL_ACTION_CLASS extends Model{
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models){
        }
    }
    ATCL_ACTION_CLASS.init({
            ATCL_ID:{
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            GASY_ID: DataTypes.STRING,
            ATCL_NAME: DataTypes.STRING,
            ATCL_DETAIL: DataTypes.STRING,
            ATCL_DISPLAY_NAME: DataTypes.STRING,
            ATCL_ORDER_VALUE: DataTypes.INTEGER,
            ST_CODE: DataTypes.STRING,
            LAST_MODIFIED_DATE: DataTypes.DATE,
            LAST_MODIFIED_BY: DataTypes.DATE,
        },
        {
            sequelize,
            modelName: 'FGGDATA',
            tableName: 'ATCL_ACTION_CLASS',
            createdAt: 'LAST_MODIFIED_DATE',
            updatedAt: 'LAST_MODIFIED_BY',
        }
    )
    return ATCL_ACTION_CLASS;
}