// MOTGAK_MONSTER_TRIGGER_ATTACK
const {DataTypes} = require('sequelize');
module.exports = (sequelize)=>{
    sequelize.define('MOTGAK_MONSTER_TRIGGER_ATTACK', {
            MOTGAK_ID:{
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            //: DataTypes.STRING,
            //: DataTypes.INTEGER(8),
            MOAK_ID: DataTypes.INTEGER(8),
            AKTY_ID: DataTypes.INTEGER(8),
            DATY_ID: DataTypes.INTEGER(8),
            MOTGAK_RELATED_AB_ID: DataTypes.INTEGER(8),
            MOTGAK_DISPLAY_TEXT: DataTypes.STRING,
            MOTGAK_TAGGED_DISPLAY_TEXT: DataTypes.STRING,
            MOTGAK_ORDER_VALUE: DataTypes.INTEGER(2),
            MOTGAK_TO_HIT_BONUS: DataTypes.INTEGER(2),
            MOTGAK_REACH_DISTANCE_FEET: DataTypes.INTEGER(4),
            MOTGAK_TARGET_COUNT: DataTypes.INTEGER(2),
            MOTGAK_TARGET_TEXT: DataTypes.STRING,
            MOTGAK_STATIC_HIT_DAMAGE: DataTypes.INTEGER(2),
            MOTGAK_DYN_DAM_HIT_DICE_NUM: DataTypes.INTEGER(2),
            MOTGAK_DYN_DAM_HIT_DICE_TYPE: DataTypes.INTEGER(4),
            MOTGAK_DYN_DAM_HIT_BONUS: DataTypes.INTEGER(4),

            ST_CODE: DataTypes.STRING,
            LAST_MODIFIED_DATE: DataTypes.DATE,
            LAST_MODIFIED_BY: DataTypes.DATE,


        },
        {
            sequelize,
            modelName: 'FGGDATA',
            tableName: 'MOTGAK_MONSTER_TRIGGER_ATTACK',
            createdAt: 'LAST_MODIFIED_DATE',
            updatedAt: 'LAST_MODIFIED_BY',
        }
    )
}