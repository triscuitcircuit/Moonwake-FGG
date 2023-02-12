// PPCA_PROPERTY_CATEGORY
const {DataTypes} = require('sequelize');
module.exports = (sequelize)=>{
    sequelize.define('PPCA_PROPERTY_CATEGORY', {
            PPCA_ID:{
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            //: DataTypes.STRING,
            //: DataTypes.INTEGER(8),
            GASY_ID: DataTypes.INTEGER(8),
            PPCA_NAME: DataTypes.STRING,
            PPCA_DETAIL: DataTypes.STRING,
            PPCA_DISPLAY_NAME: DataTypes.STRING,

            ST_CODE: DataTypes.STRING,
            LAST_MODIFIED_DATE: DataTypes.DATE,
            LAST_MODIFIED_BY: DataTypes.DATE,

            PPCA_ORDER_VALUE: DataTypes.INTEGER(2),

        },
        {
            sequelize,
            modelName: 'FGGDATA',
            tableName: 'PPCA_PROPERTY_CATEGORY',
            createdAt: 'LAST_MODIFIED_DATE',
            updatedAt: 'LAST_MODIFIED_BY',
        }
    )
}