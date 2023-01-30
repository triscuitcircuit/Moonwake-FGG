// MOTY_MONSTER_TYPE

const {Model, DataTypes} = require('sequelize');
module.exports = (sequelize, DataTypes)=>{
    class MOTY_MONSTER_TYPE extends Model{
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models){
            // associated models go here
        }
    }
    MOTY_MONSTER_TYPE.init({
            MOTY_ID:{
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            //: DataTypes.STRING,
            //: DataTypes.INTEGER(8),
            GASY_ID: DataTypes.INTEGER(8),
            MOTY_NAME: DataTypes.STRING,
            MOTY_DETAIL: DataTypes.STRING,
            MOTY_DISPLAY_NAME: DataTypes.STRING,

            ST_CODE: DataTypes.STRING,
            LAST_MODIFIED_DATE: DataTypes.DATE,
            LAST_MODIFIED_BY: DataTypes.DATE,

            MOTY_PRIM_SEC_CATEGORY: DataTypes.STRING,

        },
        {
            sequelize,
            modelName: 'FGGDATA',
            tableName: 'MOTY_MONSTER_TYPE',
            createdAt: 'LAST_MODIFIED_DATE',
            updatedAt: 'LAST_MODIFIED_BY',
        }
    )
    return MOTY_MONSTER_TYPE;
}