const {Model, DataTypes} = require('sequelize');
module.exports = (sequelize, DataTypes)=>{
    class ATTG_ACTION_TAG extends Model{
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models){
        }
    }
    ATTG_ACTION_TAG.init({
            ATTG_ID:{
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            AT_ID: DataTypes.INTEGER(8),
            ATTG_TEXT: DataTypes.STRING,
            ATTG_TABLE: DataTypes.STRING,
            ATTG_TABLE_KEY: DataTypes.STRING,
            ATTG_TABLE_KEY_VALUE: DataTypes.STRING,
            ST_CODE: DataTypes.STRING,
            LAST_MODIFIED_DATE: DataTypes.DATE,
            LAST_MODIFIED_BY: DataTypes.DATE,
        },
        {
            sequelize,
            modelName: 'FGGDATA',
            tableName: 'ATTG_ACTION_TAG',
            createdAt: 'LAST_MODIFIED_DATE',
            updatedAt: 'LAST_MODIFIED_BY',
        }
    )
    return ATTG_ACTION_TAG;
}