// MOAG_MONSTER_AGGREGATION
const {DataTypes} = require('sequelize');
module.exports = (sequelize)=>{
    sequelize.define('MOAG_MONSTER_AGGREGATION', {
            MOAG_ID:{
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            //: DataTypes.STRING,
            //: DataTypes.INTEGER(8),
            GASYMO_ID: DataTypes.INTEGER(8),
            MOAG_LINE_NUMBER: DataTypes.INTEGER(4),
            MOAG_COLUMN_NUMBER: DataTypes.INTEGER(4),
            MOAG_TABLE: DataTypes.STRING,
            MOAG_KEY_COLUMN: DataTypes.STRING,
            MOAG_DISPLAY_COLUMN_NAME: DataTypes.STRING,
            MOAG_JOINED_DISPLAY_COLUMN: DataTypes.STRING,
            MOAG_FUNCTION_NAME: DataTypes.STRING,
            MOAG_HIDE_RULE: DataTypes.STRING,

            ST_CODE: DataTypes.STRING,
            LAST_MODIFIED_DATE: DataTypes.DATE,
            LAST_MODIFIED_BY: DataTypes.DATE,
        },
        {
            sequelize,
            modelName: 'FGGDATA',
            tableName: 'MOAG_MONSTER_AGGREGATION',
            createdAt: 'LAST_MODIFIED_DATE',
            updatedAt: 'LAST_MODIFIED_BY',
        }
    )
}