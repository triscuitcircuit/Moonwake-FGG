const {DataTypes} = require('sequelize');
module.exports = (sequelize)=>{
    sequelize.define('MOAK_TEMP_SAVE', {
            MOAK_ID:{
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            GASYMO_ID: DataTypes.INTEGER(8),
            AT_ID: DataTypes.INTEGER(8),
            ATDE_ID: DataTypes.INTEGER(8),
            AKTY_ID: DataTypes.INTEGER(8),
            DATY_ID: DataTypes.INTEGER(8),
            MOAK_RELATED_AB_ID: DataTypes.INTEGER(8),
            MOAK_DISPLAY_TEXT: DataTypes.STRING,
            MOAK_TAGGED_DISPLAY_TEXT: DataTypes.STRING,
            MOAK_ORDER_VALUE: DataTypes.INTEGER(2),
            MOAK_TO_HIT_BONUS: DataTypes.INTEGER(2),
            MOAK_REACH_DISTANCE_FEET: DataTypes.INTEGER(4),
            MOAK_TARGET_COUNT: DataTypes.INTEGER(2),
            MOAK_TARGET_TEXT: DataTypes.STRING,
            MOAK_STATIC_HIT_DAMAGE: DataTypes.INTEGER(4),
            MOAK_DYN_DAM_HIT_DICE_NUM: DataTypes.INTEGER(2),
            MOAK_DYN_DAM_HIT_DICE_TYPE: DataTypes.INTEGER(4),
            MOAK_DYN_DAM_HIT_BONUS: DataTypes.INTEGER(4),
            ST_CODE: DataTypes.STRING,
            LAST_MODIFIED_DATE: DataTypes.DATE,
            LAST_MODIFIED_BY: DataTypes.DATE,
            // MOAK_HIGH_RANGE_DISTANCE_FEET: number(4)
        },
        {
            sequelize,
            modelName: 'FGGDATA',
            tableName: 'MOAK_TEMP_SAVE',
            createdAt: 'LAST_MODIFIED_DATE',
            updatedAt: 'LAST_MODIFIED_BY',
        }
    )
}