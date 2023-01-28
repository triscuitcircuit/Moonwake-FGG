const {Model, DataTypes} = require('sequelize');
module.exports = (sequelize, DataTypes)=>{
    class USRO_USER_ROLE extends Model{
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models){
            // associated models go here
        }
    }
    USRO_USER_ROLE.init({
            USRO_ID:{
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            US_ID: DataTypes.INTEGER(8),
            RO_ID: DataTypes.INTEGER(8),
            USRO_CREATED_DATEKEY: DataTypes.INTEGER(8),
            USRO_ENABLED_DATEKEY: DataTypes.INTEGER(8),
            USRO_RETIRED_DATEKEY: DataTypes.INTEGER(8),
            ST_CODE: DataTypes.STRING,
            LAST_MODIFIED_DATE: DataTypes.DATE,
            LAST_MODIFIED_BY: DataTypes.DATE,
        },
        {
            sequelize,
            modelName: 'FGGDATA',
            tableName: 'USRO_USER_ROLE',
            createdAt: 'LAST_MODIFIED_DATE',
            updatedAt: 'LAST_MODIFIED_BY',
        }
    )
    return USRO_USER_ROLE;
}