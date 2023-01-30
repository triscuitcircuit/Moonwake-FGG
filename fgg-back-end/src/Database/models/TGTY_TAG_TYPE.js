const {Model, DataTypes} = require('sequelize');
module.exports = (sequelize, DataTypes)=>{
    class TGTY_TAG_TYPE extends Model{
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models){
            // associated models go here
        }
    }
    TGTY_TAG_TYPE.init({
            TGTY_ID:{
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            //: DataTypes.STRING,
            //: DataTypes.INTEGER(8),
            TGTY_NAME: DataTypes.STRING,
            TGTY_DETAIL: DataTypes.STRING,
            TGTY_DISPLAY_NAME: DataTypes.STRING,

            ST_CODE: DataTypes.STRING,
            LAST_MODIFIED_DATE: DataTypes.DATE,
            LAST_MODIFIED_BY: DataTypes.DATE,

        },
        {
            sequelize,
            modelName: 'FGGDATA',
            tableName: 'TGTY_TAG_TYPE',
            createdAt: 'LAST_MODIFIED_DATE',
            updatedAt: 'LAST_MODIFIED_BY',
        }
    )
    return TGTY_TAG_TYPE;
}