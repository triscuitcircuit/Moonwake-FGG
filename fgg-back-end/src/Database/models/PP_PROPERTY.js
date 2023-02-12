// PP_PROPERTY
const {DataTypes} = require('sequelize');
module.exports = (sequelize)=>{
    sequelize.define('PP_PROPERTY',{
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
}