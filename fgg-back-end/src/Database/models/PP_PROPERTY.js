// PP_PROPERTY
const {Model, DataTypes} = require('sequelize');
module.exports = (sequelize, DataTypes)=>{
    class PP_PROPERTY extends Model{
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models){
            // associated models go here
        }
    }
    PP_PROPERTY.init({
            PP_ID:{
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            //: DataTypes.STRING,
            //: DataTypes.INTEGER(8),
            PPCA_ID: DataTypes.INTEGER(8),
            GASY_ID: DataTypes.INTEGER(8),
            PP_NAME: DataTypes.STRING,
            PP_DETAIL: DataTypes.STRING,
            PP_DISPLAY_NAME: DataTypes.STRING,

            ST_CODE: DataTypes.STRING,
            LAST_MODIFIED_DATE: DataTypes.DATE,
            LAST_MODIFIED_BY: DataTypes.DATE,

            PP_ORDER_VALUE: DataTypes.INTEGER(2),

        },
        {
            sequelize,
            modelName: 'FGGDATA',
            tableName: 'PP_PROPERTY',
            createdAt: 'LAST_MODIFIED_DATE',
            updatedAt: 'LAST_MODIFIED_BY',
        }
    )
    return PP_PROPERTY;
}