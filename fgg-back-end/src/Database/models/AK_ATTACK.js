const {Model, DataTypes} = require('sequelize');
module.exports = (sequelize, DataTypes)=>{
    class AK_ATTACK extends Model{
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models){
        }
    }
    AK_ATTACK.init({
            AK_ID:{
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            GASY_ID: DataTypes.INTEGER(8),
            AT_ID: DataTypes.INTEGER(8),
            AKTY_ID: DataTypes.INTEGER(8),
            AKCA_ID: DataTypes.INTEGER(8),
            PRIMARY_DATY_ID: DataTypes.INTEGER(8),
            AK_RELATED_ABCA_ID: DataTypes.INTEGER(8),
            AK_ORDER_VALUE: DataTypes.INTEGER(8),
            ST_CODE: DataTypes.STRING,
            LAST_MODIFIED_DATE: DataTypes.DATE,
            LAST_MODIFIED_BY: DataTypes.DATE,
        },
        {
            sequelize,
            modelName: 'FGGDATA',
            tableName: 'AK_ATTACK',
            createdAt: 'LAST_MODIFIED_DATE',
            updatedAt: 'LAST_MODIFIED_BY',
        }
    )
    return AK_ATTACK;
}