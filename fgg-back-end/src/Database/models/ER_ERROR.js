const {Model, DataTypes} = require('sequelize');
module.exports = (sequelize, DataTypes)=>{
    class ER_ERROR extends Model{
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models){
            // associated models go here
        }
    }
    ER_ERROR.init({
            ER_ID:{
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            ER_DETAIL: DataTypes.STRING,
            ER_PRIORITY: DataTypes.STRING,
            ER_TABLE_NAME: DataTypes.STRING,
            ER_PROGRAM_NAME: DataTypes.STRING,
            ER_BLOCK_NAME: DataTypes.STRING,
            ER_PHP_PAGE_NAME: DataTypes.STRING,
            ER_SQLERRM: DataTypes.STRING,
            ER_RELATED_GASYMO_ID: DataTypes.INTEGER(8),
            ER_STATUS: DataTypes.STRING,
            ER_RESOLVED_BY: DataTypes.STRING,

            ST_CODE: DataTypes.STRING,
            LAST_MODIFIED_DATE: DataTypes.DATE,
            LAST_MODIFIED_BY: DataTypes.DATE,
        },
        {
            sequelize,
            modelName: 'FGGDATA',
            tableName: 'ER_ERROR',
            createdAt: 'LAST_MODIFIED_DATE',
            updatedAt: 'LAST_MODIFIED_BY',
        }
    )
    return ER_ERROR;
}