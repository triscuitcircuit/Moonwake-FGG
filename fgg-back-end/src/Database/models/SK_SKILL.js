
const {Model, DataTypes} = require('sequelize');
module.exports = (sequelize, DataTypes)=>{
    class SK_SKILL extends Model{
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models){
            // associated models go here
        }
    }
    SK_SKILL.init({
            SK_ID:{
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            //: DataTypes.STRING,
            //: DataTypes.INTEGER(8),
            GASY_ID: DataTypes.INTEGER(8),
            SK_NAME: DataTypes.STRING,
            SK_DETAIL: DataTypes.STRING,
            SK_DISPLAY_NAME: DataTypes.STRING,

            ST_CODE: DataTypes.STRING,
            LAST_MODIFIED_DATE: DataTypes.DATE,
            LAST_MODIFIED_BY: DataTypes.DATE,

            SK_RELATED_AB_NAME: DataTypes.STRING,

        },
        {
            sequelize,
            modelName: 'FGGDATA',
            tableName: 'SK_SKILL',
            createdAt: 'LAST_MODIFIED_DATE',
            updatedAt: 'LAST_MODIFIED_BY',
        }
    )
    return SK_SKILL;
}