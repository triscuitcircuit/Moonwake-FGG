// GASYMO_GAME_SYSTEM_MONSTER
const {DataTypes} = require('sequelize');
module.exports = (sequelize)=>{
    sequelize.define('GASYMO_GAME_SYSTEM_MONSTER',{
            GASYMO_ID:{
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            //: DataTypes.STRING,
            //: DataTypes.INTEGER(8),
            GASY_ID: DataTypes.INTEGER(8),
            MO_ID: DataTypes.INTEGER(8),
            PRI_MOTY_ID: DataTypes.INTEGER(8),
            SEC_MOTY_ID: DataTypes.INTEGER(8),
            CHLE_ID: DataTypes.INTEGER(8),
            RR_ID: DataTypes.INTEGER(8),
            SZ_ID: DataTypes.INTEGER(8),
            GASYMO_NAME: DataTypes.STRING,
            GASYMO_DISPLAY_NAME: DataTypes.STRING,
            GASYMO_HIT_DICE_NUM: DataTypes.INTEGER(4),
            GASYMO_HIT_DICE_TYPE: DataTypes.INTEGER(4),
            GASYMO_HIT_DICE_BONUS: DataTypes.INTEGER(4),
            GASYMO_ARMOR_CLASS: DataTypes.INTEGER(2),
            GASYMO_ALT_ARMOR_CLASS: DataTypes.INTEGER(2),
            GASYMO_AC_TYPE_DETAIL: DataTypes.STRING,
            GASYMO_NUM_ATTACKS: DataTypes.INTEGER(2),
            GASYMO_MIN_NUM_ENC: DataTypes.INTEGER(4),
            GASYMO_MAX_NUM_ENC: DataTypes.INTEGER(4),
            GASYMO_XP_VALUE: DataTypes.INTEGER(8),

            ST_CODE: DataTypes.STRING,
            LAST_MODIFIED_DATE: DataTypes.DATE,
            LAST_MODIFIED_BY: DataTypes.DATE,

            MOST_ID: DataTypes.INTEGER(8),
            GACO_ID: DataTypes.INTEGER(8),

        },
        {
            sequelize,
            modelName: 'FGGDATA',
            tableName: 'GASYMO_GAME_SYSTEM_MONSTER',
            createdAt: 'LAST_MODIFIED_DATE',
            updatedAt: 'LAST_MODIFIED_BY',
        }
    )
}