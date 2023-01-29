const {Model, DataTypes} = require('sequelize');
module.exports = (sequelize, DataTypes)=>{
    class FAUSAS_FAILED_USER_ACCESS extends Model{
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models){
            // associated models go here
        }
    }
    FAUSAS_FAILED_USER_ACCESS.init({
            FAUSAS_ID:{
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            //: DataTypes.STRING,
            //: DataTypes.INTEGER(8),
            FAUSAS_LOGIN_ID: DataTypes.STRING,
            FAUSAS_PASSWORD: DataTypes.STRING,
            FAUSAS_ATTEMPT_DATEKEY: DataTypes.INTEGER(8),
            FAUSAS_DETAIL: DataTypes.STRING,

            ST_CODE: DataTypes.STRING,
            LAST_MODIFIED_DATE: DataTypes.DATE,
            LAST_MODIFIED_BY: DataTypes.DATE,
        },
        {
            sequelize,
            modelName: 'FGGDATA',
            tableName: 'FAUSAS_FAILED_USER_ACCESS',
            createdAt: 'LAST_MODIFIED_DATE',
            updatedAt: 'LAST_MODIFIED_BY',
        }
    )
    return FAUSAS_FAILED_USER_ACCESS;
}