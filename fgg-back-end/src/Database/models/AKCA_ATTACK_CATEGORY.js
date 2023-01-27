const {Model, DataTypes} = require('sequelize');
module.exports = (sequelize, DataTypes)=>{
    class AKCA_ATTACK_CATEGORY extends Model{
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models){
        }
    }
    AKCA_ATTACK_CATEGORY.init({
            AKCA_ID:{
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            AKCA_GASY_ID: DataTypes.INTEGER(8),
            AKCA_NAME: DataTypes.STRING,
            AKCA_DETAIL: DataTypes.STRING,
            AKCA_DISPLAY_NAME: DataTypes.STRING,
            ST_CODE: DataTypes.STRING,
            LAST_MODIFIED_DATE: DataTypes.DATE,
            LAST_MODIFIED_BY: DataTypes.DATE,
        },
        {
            sequelize,
            modelName: 'FGGDATA',
            tableName: 'AKCA_ATTACK_CATEGORY',
            createdAt: 'LAST_MODIFIED_DATE',
            updatedAt: 'LAST_MODIFIED_BY',
        }
    )
    return AKCA_ATTACK_CATEGORY;
}