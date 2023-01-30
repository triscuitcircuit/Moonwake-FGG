
const {Model, DataTypes} = require('sequelize');
module.exports = (sequelize, DataTypes)=>{
    class SK_SPELL extends Model{
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models){
            // associated models go here
        }
    }
    SK_SPELL.init({
            SK_ID:{
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            //: DataTypes.STRING,
            //: DataTypes.INTEGER(8),
            GASY_ID: DataTypes.INTEGER(8),
            GACO_ID: DataTypes.INTEGER(8),
            SPTY_ID: DataTypes.INTEGER(8),
            SPSC_ID: DataTypes.INTEGER(8),
            SP_NAME: DataTypes.STRING,
            SP_DISPLAY_NAME: DataTypes.STRING,
            SP_RITUAL_FLAG: DataTypes.STRING,
            SP_CASTING_TIME: DataTypes.STRING,
            SP_RANGE: DataTypes.STRING,
            SP_DURATION: DataTypes.STRING,
            SP_OGL_FLAG: DataTypes.STRING,
            SP_ORDER_VALUE: DataTypes.INTEGER(4),

            ST_CODE: DataTypes.STRING,
            LAST_MODIFIED_DATE: DataTypes.DATE,
            LAST_MODIFIED_BY: DataTypes.DATE,


        },
        {
            sequelize,
            modelName: 'FGGDATA',
            tableName: 'SK_SPELL',
            createdAt: 'LAST_MODIFIED_DATE',
            updatedAt: 'LAST_MODIFIED_BY',
        }
    )
    return SK_SPELL;
}