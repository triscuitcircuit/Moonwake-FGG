// MOAKDE_MONSTER_ATTACK_DETAIL
const {DataTypes} = require('sequelize');
module.exports = (sequelize)=>{
    sequelize.define('MOAKDE_MONSTER_ATTACK_DETAIL', {
            MOAKDE_ID:{
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            //: DataTypes.STRING,
            //: DataTypes.INTEGER(8),
            MOAK_ID: DataTypes.INTEGER(8),
            MOAKDE_ORDER_VALUE: DataTypes.INTEGER(2),
            AKTY_ID: DataTypes.INTEGER(8),
            AKCA_ID: DataTypes.INTEGER(8),
            DATY_ID: DataTypes.INTEGER(8),
            MOAKDE_RELATED_ABCA_ID: DataTypes.INTEGER(8),
            MOAKDE_TO_HIT_BONUS: DataTypes.INTEGER(2),
            MOAKDE_MIN_DISTANCE_FEET: DataTypes.INTEGER(4),
            MOAKDE_MAX_DISTANCE_FEET: DataTypes.INTEGER(4),
            MOAKDE_TARGET_COUNT: DataTypes.INTEGER(2),
            MOAKDE_TARGET_TEXT: DataTypes.STRING,
            MOAKDE_STATIC_HIT_DAMAGE: DataTypes.INTEGER(4),
            MOAKDE_DYN_DAM_HIT_DICE_NUM: DataTypes.INTEGER(2),
            MOAKDE_DYN_DAM_HIT_DICE_TYPE: DataTypes.INTEGER(4),
            MOAKDE_DYN_DAM_HIT_BONUS: DataTypes.INTEGER(4),

            ST_CODE: DataTypes.STRING,
            LAST_MODIFIED_DATE: DataTypes.DATE,
            LAST_MODIFIED_BY: DataTypes.DATE,
        },
        {
            sequelize,
            modelName: 'FGGDATA',
            tableName: 'MOAKDE_MONSTER_ATTACK_DETAIL',
            createdAt: 'LAST_MODIFIED_DATE',
            updatedAt: 'LAST_MODIFIED_BY',
        }
    )
}