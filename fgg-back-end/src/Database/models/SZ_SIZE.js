const {Model, DataTypes} = require('sequelize');
module.exports = (sequelize, DataTypes)=>{
    class SZ_SIZE extends Model{
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models){
            // associated models go here
        }
    }
    SZ_SIZE.init({
            SZ_ID:{
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            //: DataTypes.STRING,
            //: DataTypes.INTEGER(8),
            GASY_ID: DataTypes.INTEGER(8),
            SZ_NAME: DataTypes.STRING,
            SZ_DETAIL: DataTypes.STRING,
            SZ_DISPLAY_NAME: DataTypes.STRING,
            SZ_HIT_DICE_VALUE: DataTypes.INTEGER(2),
            SZ_AVG_HIT_POINT_VALUE: DataTypes.INTEGER(4,2),
            SZ_ORDER_VALUE: DataTypes.INTEGER(2),

            ST_CODE: DataTypes.STRING,
            LAST_MODIFIED_DATE: DataTypes.DATE,
            LAST_MODIFIED_BY: DataTypes.DATE,

        },
        {
            sequelize,
            modelName: 'FGGDATA',
            tableName: 'SZ_SIZE',
            createdAt: 'LAST_MODIFIED_DATE',
            updatedAt: 'LAST_MODIFIED_BY',
        }
    )
    return SZ_SIZE;
}