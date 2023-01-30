const {Model, DataTypes} = require('sequelize');
module.exports = (sequelize, DataTypes)=>{
    class TT_TRAIT extends Model{
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models){
            // associated models go here
        }
    }
    TT_TRAIT.init({
            TT_ID:{
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            //: DataTypes.STRING,
            //: DataTypes.INTEGER(8),
            GASY_ID: DataTypes.INTEGER(8),
            TT_NAME: DataTypes.STRING,
            TT_DETAIL: DataTypes.STRING,
            TT_DISPLAY_NAME: DataTypes.STRING,

            ST_CODE: DataTypes.STRING,
            LAST_MODIFIED_DATE: DataTypes.DATE,
            LAST_MODIFIED_BY: DataTypes.DATE,

            TT_ORDER_VALUE: DataTypes.INTEGER(4),
            GACO_ID: DataTypes.INTEGER(8),

        },
        {
            sequelize,
            modelName: 'FGGDATA',
            tableName: 'TT_TRAIT',
            createdAt: 'LAST_MODIFIED_DATE',
            updatedAt: 'LAST_MODIFIED_BY',
        }
    )
    return TT_TRAIT;
}