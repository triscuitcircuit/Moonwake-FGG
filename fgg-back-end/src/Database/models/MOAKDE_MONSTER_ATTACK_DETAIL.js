// MOAKDE_MONSTER_ATTACK_DETAIL
const {Model, DataTypes} = require('sequelize');
module.exports = (sequelize, DataTypes)=>{
    class MOAKDE_MONSTER_ATTACK_DETAIL extends Model{
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models){
            // associated models go here
        }
    }
    MOAKDE_MONSTER_ATTACK_DETAIL.init({
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
    return MOAKDE_MONSTER_ATTACK_DETAIL;
}