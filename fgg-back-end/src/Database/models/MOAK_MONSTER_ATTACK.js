const {Model, DataTypes} = require('sequelize');
module.exports = (sequelize, DataTypes)=>{
    class MOAK_MONSTER_ATTACK extends Model{
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models){
            // associated models go here
        }
    }
    MOAK_MONSTER_ATTACK.init({
            MOAK_ID:{
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            GASYMO_ID: DataTypes.INTEGER(8),
            AT_ID: DataTypes.INTEGER(8),
            ATDE_ID: DataTypes.INTEGER(8),
            MOAK_DISPLAY_TEXT: DataTypes.STRING,
            MOAK_TAGGED_DISPLAY_TEXT: DataTypes.STRING,
            MOAK_ORDER_VALUE: DataTypes.INTEGER(8),
            ST_CODE: DataTypes.STRING,
            LAST_MODIFIED_DATE: DataTypes.DATE,
            LAST_MODIFIED_BY: DataTypes.DATE,
        },
        {
            sequelize,
            modelName: 'FGGDATA',
            tableName: 'MOAK_MONSTER_ATTACK',
            createdAt: 'LAST_MODIFIED_DATE',
            updatedAt: 'LAST_MODIFIED_BY',
        }
    )
    return MOAK_MONSTER_ATTACK;
}