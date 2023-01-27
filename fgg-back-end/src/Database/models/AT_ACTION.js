const {Model, DataTypes} = require('sequelize');
module.exports = (sequelize, DataTypes)=>{
    class AT_ACTION extends Model{
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models){
        }
    }
    AT_ACTION.init({
            AT_ID:{
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            ATCL_ID: DataTypes.INTEGER(8),
            GASY_ID: DataTypes.STRING,
            AT_NAME: DataTypes.STRING,
            AT_DETAIL: DataTypes.STRING,
            AT_DISPLAY_NAME: DataTypes.STRING,
            AT_DYNAMIC_TEXT: DataTypes.STRING,
            ST_CODE: DataTypes.STRING,
            LAST_MODIFIED_DATE: DataTypes.DATE,
            LAST_MODIFIED_BY: DataTypes.DATE,
            AT_EXPECTED_DETAIL_COLUMNS: DataTypes.INTEGER(2),
            GACO_ID: DataTypes.INTEGER(8),
        },
        {
            sequelize,
            modelName: 'FGGDATA',
            tableName: 'AT_ACTION',
            createdAt: 'LAST_MODIFIED_DATE',
            updatedAt: 'LAST_MODIFIED_BY',
        }
    )
    return AT_ACTION;
}