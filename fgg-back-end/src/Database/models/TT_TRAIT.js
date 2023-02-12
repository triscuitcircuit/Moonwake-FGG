const {DataTypes} = require('sequelize');
module.exports = (sequelize)=>{
    sequelize.define('TT_TRAIT', {
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
}