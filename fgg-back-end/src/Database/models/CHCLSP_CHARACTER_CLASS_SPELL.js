const {Model, DataTypes} = require('sequelize');
module.exports = (sequelize, DataTypes)=>{
    class CHCLSP_CHARACTER_CLASS_SPELL extends Model{
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models){
            // associated models go here
        }
    }
    CHCLSP_CHARACTER_CLASS_SPELL.init({
            CHCLSP_ID:{
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            CHCL_ID: DataTypes.INTEGER(8),
            SP_ID: DataTypes.INTEGER(8),
            CHCLSP_LEVEL_VALUE: DataTypes.INTEGER(2),
            ST_CODE: DataTypes.STRING,
            LAST_MODIFIED_DATE: DataTypes.DATE,
            LAST_MODIFIED_BY: DataTypes.DATE,
        },
        {
            sequelize,
            modelName: 'FGGDATA',
            tableName: 'CHCLSP_CHARACTER_CLASS_SPELL',
            createdAt: 'LAST_MODIFIED_DATE',
            updatedAt: 'LAST_MODIFIED_BY',
        }
    )
    return CHCLSP_CHARACTER_CLASS_SPELL;
}