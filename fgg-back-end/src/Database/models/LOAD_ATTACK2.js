// LOAD_ATTACK
const {Model, DataTypes} = require('sequelize');
module.exports = (sequelize, DataTypes)=>{
    class LOAD_ATTACK extends Model{
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models){
            // associated models go here
        }
    }
    LOAD_ATTACK.init({
            LOAD_ID:{
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            //: DataTypes.STRING,
            //: DataTypes.INTEGER(8),
            ATTACK_NAME: DataTypes.STRING,
            ATTACK_DISPLAY_NAME: DataTypes.STRING,
            ATTACK_TYPE: DataTypes.STRING,
            ACTION_CLASS: DataTypes.STRING,
            ATTACK_CATEGORY: DataTypes.STRING,
            FGG_IP: DataTypes.INTEGER(1),
        },
        {
            sequelize,
            modelName: 'FGGDATA',
            tableName: 'LOAD_ATTACK2',
            createdAt: 'LAST_MODIFIED_DATE',
            updatedAt: 'LAST_MODIFIED_BY',
        }
    )
    return LOAD_ATTACK;
}