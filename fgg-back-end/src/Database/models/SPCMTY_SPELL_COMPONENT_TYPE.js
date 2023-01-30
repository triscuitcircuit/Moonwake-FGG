const {Model, DataTypes} = require('sequelize');
module.exports = (sequelize, DataTypes)=>{
    class SPCMTY_SPELL_COMPONENT_TYPE extends Model{
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models){
            // associated models go here
        }
    }
    SPCMTY_SPELL_COMPONENT_TYPE.init({
            SPCMTY_ID:{
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            //: DataTypes.STRING,
            //: DataTypes.INTEGER(8),
            GASY_ID: DataTypes.INTEGER(8),
            SPCMTY_NAME: DataTypes.STRING,
            SPCMTY_DISPLAY_NAME: DataTypes.STRING,
            SPCMTY_DETAIL: DataTypes.STRING,
            SPCMTY_ORDER_VALUE: DataTypes.INTEGER(2),

            ST_CODE: DataTypes.STRING,
            LAST_MODIFIED_DATE: DataTypes.DATE,
            LAST_MODIFIED_BY: DataTypes.DATE,

        },
        {
            sequelize,
            modelName: 'FGGDATA',
            tableName: 'SPCMTY_SPELL_COMPONENT_TYPE',
            createdAt: 'LAST_MODIFIED_DATE',
            updatedAt: 'LAST_MODIFIED_BY',
        }
    )
    return SPCMTY_SPELL_COMPONENT_TYPE;
}