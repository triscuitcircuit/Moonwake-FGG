// MOAT_MONSTER_ACTION
const {DataTypes} = require('sequelize');
module.exports = (sequelize)=>{
    sequelize.define('MOAT_MONSTER_ACTION', {
            MOAT_ID:{
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            //: DataTypes.STRING,
            //: DataTypes.INTEGER(8),
            GASYMO_ID: DataTypes.INTEGER(8),
            AT_ID: DataTypes.INTEGER(8),
            ATDE_ID: DataTypes.INTEGER(8),
            MOAT_DISPLAY_TEXT: DataTypes.STRING,
            MOAT_DISPLAY_SUBTEXT: DataTypes.STRING,
            MOAT_TAGGED_DISPLAY_TEXT: DataTypes.STRING,
            MOAT_TAGGED_DISPLAY_SUBTEXT: DataTypes.STRING,
            MOAT_ORDER_VALUE: DataTypes.INTEGER(4),
            MOAT_RECHARGE_DIE_VALUE: DataTypes.INTEGER(4),
            MOAT_RECHARGE_LOW_VALUE: DataTypes.INTEGER(4),
            MOAT_RECHARGE_HIGH_VALUE: DataTypes.INTEGER(2),
            MOAT_ACTION_COUNT_COST: DataTypes.INTEGER(2),

            ST_CODE: DataTypes.STRING,
            LAST_MODIFIED_DATE: DataTypes.DATE,
            LAST_MODIFIED_BY: DataTypes.DATE,
        },
        {
            sequelize,
            modelName: 'FGGDATA',
            tableName: 'MOAT_MONSTER_ACTION',
            createdAt: 'LAST_MODIFIED_DATE',
            updatedAt: 'LAST_MODIFIED_BY',
        }
    )
}