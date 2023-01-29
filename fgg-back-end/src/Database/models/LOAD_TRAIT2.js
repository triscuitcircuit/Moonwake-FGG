const {Model, DataTypes} = require('sequelize');
module.exports = (sequelize, DataTypes)=>{
    class LOAD_TRAIT2 extends Model{
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models){
        }
    }
    LOAD_TRAIT2.init({
            LO_ID:{
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },

            TRAIT_NAME: DataTypes.STRING,
            TRAIT_DETAIL: DataTypes.STRING,
            FGG_IP: DataTypes.INTEGER(2),
        },
        {
            sequelize,
            modelName: 'FGGDATA',
            tableName: 'LOAD_TRAIT2',
            createdAt: 'LAST_MODIFIED_DATE',
            updatedAt: 'LAST_MODIFIED_BY',
        }
    )
    return LOAD_TRAIT2;
}