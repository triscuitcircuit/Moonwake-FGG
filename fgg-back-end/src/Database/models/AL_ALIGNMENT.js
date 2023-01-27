const {Model, DataTypes} = require('sequelize');
module.exports = (sequelize, DataTypes)=>{
    class AL_ALIGNMENT extends Model{
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models){
        }
    }
    AL_ALIGNMENT.init({
            AL_ID:{
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            GASY_ID: DataTypes.INTEGER(8),
            AL_NAME: DataTypes.STRING,
            AL_DETAIL: DataTypes.STRING,
            AL_DISPLAY_NAME: DataTypes.STRING,
            AL_DOMAIN_VALUE: DataTypes.STRING,
            ST_CODE: DataTypes.STRING,
            LAST_MODIFIED_DATE: DataTypes.DATE,
            LAST_MODIFIED_BY: DataTypes.DATE,
            AL_SUBDOMAIN_VALUE: DataTypes.STRING,
        },
        {
            sequelize,
            modelName: 'FGGDATA',
            tableName: 'AL_ALIGNMENT',
            createdAt: 'LAST_MODIFIED_DATE',
            updatedAt: 'LAST_MODIFIED_BY',
        }
    )
    return AL_ALIGNMENT;
}