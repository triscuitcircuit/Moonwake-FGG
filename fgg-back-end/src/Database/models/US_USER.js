const {Model, DataTypes} = require('sequelize');
module.exports = (sequelize, DataTypes)=>{
    class US_USER extends Model{
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models){
            // associated models go here
        }
    }
    US_USER.init({
            US_ID:{
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            // US_FIRST_NAME: DataTypes.STRING,
            // US_LAST_NAME: DataTypes.STRING,
            // US_NICK_NAME: DataTypes.STRING,
            // US_DISPLAY_NAME: DataTypes.STRING,
            // US_EMAIL_ADDRESS: DataTypes.STRING,
            // US_PHONE_NUMBER: DataTypes.STRING,
            // US_ZIPCODE: DataTypes.STRING,
            // GACO_ID: DataTypes.INTEGER(8),
            // US_CREATED_DATEKEY: DataTypes.INTEGER(8),
            // US_ENABLED_DATEKEY: DataTypes.INTEGER(8),
            // US_RETIRED_DATEKEY: DataTypes.INTEGER(8),
            ST_CODE: DataTypes.STRING,
            LAST_MODIFIED_DATE: DataTypes.DATE,
            LAST_MODIFIED_BY: DataTypes.DATE,
        },
        {
            sequelize,
            modelName: 'FGGDATA',
            tableName: 'US_USER',
            createdAt: 'LAST_MODIFIED_DATE',
            updatedAt: 'LAST_MODIFIED_BY',
        }
    )
    return US_USER;
}