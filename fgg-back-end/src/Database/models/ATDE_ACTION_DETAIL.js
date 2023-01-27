const {Model, DataTypes} = require('sequelize');
module.exports = (sequelize, DataTypes)=>{
    class ATDE_ACTION_DETAIL extends Model{
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models){
        }
    }
    ATDE_ACTION_DETAIL.init({
            ATDE_ID:{
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            AT_ID: DataTypes.INTEGER(8),
            ATCL_ID: DataTypes.INTEGER(8),
            GASY_ID: DataTypes.INTEGER(8),
            ATDE_NAME: DataTypes.STRING,
            ATDE_DETAIL: DataTypes.STRING,
            ATDE_ORDER_VALUE: DataTypes.INTEGER,
            ST_CODE: DataTypes.STRING,
            LAST_MODIFIED_DATE: DataTypes.DATE,
            LAST_MODIFIED_BY: DataTypes.DATE,
        },
        {
            sequelize,
            modelName: 'FGGDATA',
            tableName: 'ATDE_ACTION_DETAIL',
            createdAt: 'LAST_MODIFIED_DATE',
            updatedAt: 'LAST_MODIFIED_BY',
        }
    )
    return ATDE_ACTION_DETAIL;
}