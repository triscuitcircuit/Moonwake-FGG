const {Model, DataTypes} = require('sequelize');
module.exports = (sequelize, DataTypes)=>{
    class ERPMCH_ERROR_PARAMETER_CHECK extends Model{
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models){
            // associated models go here
        }
    }
    ERPMCH_ERROR_PARAMETER_CHECK.init({
            ER_ID:{
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            // : DataTypes.STRING,
            // : DataTypes.INTEGER(8),

            PROGRAM_CODE: DataTypes.STRING,
            BLOCK_CODE: DataTypes.STRING,
            PHP_PAGE: DataTypes.STRING,
            ERPMCH_ID_STRING: DataTypes.STRING,
            GASYMO_ID: DataTypes.INTEGER(8),
            GASY_ID: DataTypes.INTEGER(8),
            ERPMCH_DATE: DataTypes.DATE,
            ERPMCH_RESOLVED_FLAG: DataTypes.STRING,



            // ST_CODE: DataTypes.STRING,
            // LAST_MODIFIED_DATE: DataTypes.DATE,
            // LAST_MODIFIED_BY: DataTypes.DATE,
        },
        {
            sequelize,
            modelName: 'FGGDATA',
            tableName: 'ERPMCH_ERROR_PARAMETER_CHECK',
            createdAt: 'LAST_MODIFIED_DATE',
            updatedAt: 'LAST_MODIFIED_BY',
        }
    )
    return ERPMCH_ERROR_PARAMETER_CHECK;
}