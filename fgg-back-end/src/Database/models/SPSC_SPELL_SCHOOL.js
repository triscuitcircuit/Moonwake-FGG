const {DataTypes} = require('sequelize');
module.exports = (sequelize)=>{
    sequelize.define('SPSC_SPELL_SCHOOL', {
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
}