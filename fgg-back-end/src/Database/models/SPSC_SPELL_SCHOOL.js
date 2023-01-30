const {Model, DataTypes} = require('sequelize');
module.exports = (sequelize, DataTypes)=>{
    class SPSC_SPELL_SCHOOL extends Model{
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models){
            // associated models go here
        }
    }
    SPSC_SPELL_SCHOOL.init({
            SPSC_ID:{
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            //: DataTypes.STRING,
            //: DataTypes.INTEGER(8),
            GASY_ID: DataTypes.INTEGER(8),
            SPSC_NAME: DataTypes.STRING,
            SPSC_DISPLAY_NAME: DataTypes.STRING,
            SPSC_DETAIL: DataTypes.STRING,
            SPSC_ORDER_VALUE: DataTypes.INTEGER(2),

            ST_CODE: DataTypes.STRING,
            LAST_MODIFIED_DATE: DataTypes.DATE,
            LAST_MODIFIED_BY: DataTypes.DATE,

        },
        {
            sequelize,
            modelName: 'FGGDATA',
            tableName: 'SPSC_SPELL_SCHOOL',
            createdAt: 'LAST_MODIFIED_DATE',
            updatedAt: 'LAST_MODIFIED_BY',
        }
    )
    return SPSC_SPELL_SCHOOL;
}