const {Model, DataTypes} = require('sequelize');
module.exports = (sequelize, DataTypes)=>{
    class USAS_USER_ACCESS extends Model{
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models){
            // associated models go here
        }
    }
    USAS_USER_ACCESS.init({
            USAS_ID:{
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            USAS_LOGIN_ID: DataTypes.STRING,
            USAS_PASSWORD: DataTypes.STRING,
            USAS_CREATED_DATEKEY: DataTypes.INTEGER(8),
            USAS_RETIRED_DATEKEY: DataTypes.INTEGER(8),
            ST_CODE: DataTypes.STRING,
            LAST_MODIFIED_DATE: DataTypes.DATE,
            LAST_MODIFIED_BY: DataTypes.DATE,
        },
        {
            sequelize,
            modelName: 'FGGDATA',
            tableName: 'USAS_USER_ACCESS',
            createdAt: 'LAST_MODIFIED_DATE',
            updatedAt: 'LAST_MODIFIED_BY',
        }
    )
    return USAS_USER_ACCESS;
}