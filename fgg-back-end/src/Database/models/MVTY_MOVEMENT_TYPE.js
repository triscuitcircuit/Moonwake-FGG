// MVTY_MOVEMENT_TYPE

const {DataTypes} = require('sequelize');
module.exports = (sequelize)=>{
    sequelize.define('MVTY_MOVEMENT_TYPE', {
            MVTY_ID:{
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            //: DataTypes.STRING,
            //: DataTypes.INTEGER(8),
            GASY_ID: DataTypes.INTEGER(8),
            MVTY_NAME: DataTypes.STRING,
            MVTY_DETAIL: DataTypes.STRING,
            MVTY_DISPLAY_NAME: DataTypes.STRING,

            ST_CODE: DataTypes.STRING,
            LAST_MODIFIED_DATE: DataTypes.DATE,
            LAST_MODIFIED_BY: DataTypes.DATE,

            MVTY_ORDER_VALUE: DataTypes.INTEGER(4),

        },
        {
            sequelize,
            modelName: 'FGGDATA',
            tableName: 'MVTY_MOVEMENT_TYPE',
            createdAt: 'LAST_MODIFIED_DATE',
            updatedAt: 'LAST_MODIFIED_BY',
        }
    )
}