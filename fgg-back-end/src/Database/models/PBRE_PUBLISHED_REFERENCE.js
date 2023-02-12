const {DataTypes} = require('sequelize');
module.exports = (sequelize)=>{
    sequelize.define('PBRE_PUBLISHED_REFERENCE', {
            PBRE_ID:{
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            //: DataTypes.STRING,
            //: DataTypes.INTEGER(8),
            PBRE_NAME: DataTypes.STRING,
            PBRE_DISPLAY_NAME: DataTypes.STRING,
            PBRE_STOCK_NUMBER: DataTypes.STRING,
            PBRE_ISBN13: DataTypes.STRING,
            PBRE_PRIMARY_GASY_ID: DataTypes.INTEGER(8),
            PBRE_PUBLISHED_YEAR: DataTypes.INTEGER(4),
            PBRE_PUBLISHED_PRICE: DataTypes.INTEGER(8,2),
            PBRE_TOTAL_PAGE_COUNT: DataTypes.INTEGER(4),
            PBRE_INTERIOR_COLOR_FLAG: DataTypes.STRING,
            PBRE_DETAIL: DataTypes.STRING,

            ST_CODE: DataTypes.STRING,
            LAST_MODIFIED_DATE: DataTypes.DATE,
            LAST_MODIFIED_BY: DataTypes.DATE,

        },
        {
            sequelize,
            modelName: 'FGGDATA',
            tableName: 'PBRE_PUBLISHED_REFERENCE',
            createdAt: 'LAST_MODIFIED_DATE',
            updatedAt: 'LAST_MODIFIED_BY',
        }
    )
}