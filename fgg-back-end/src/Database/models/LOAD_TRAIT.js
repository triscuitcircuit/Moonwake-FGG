const {Model, DataTypes} = require('sequelize');
module.exports = (sequelize, DataTypes)=>{
    class LOAD_TRAIT extends Model{
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models){
        }
    }
    LOAD_TRAIT.init({
            TRAIT_NAME: DataTypes.STRING,
            TRAIT_DETAIL: DataTypes.STRING,
        },
        {
            sequelize,
            modelName: 'FGGDATA',
            tableName: 'LOAD_TRAIT',
            createdAt: 'LAST_MODIFIED_DATE',
            updatedAt: 'CEDRIC',
        }
    )
    return LOAD_TRAIT;
}