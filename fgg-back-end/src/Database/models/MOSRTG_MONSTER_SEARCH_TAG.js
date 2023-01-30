// MOSRTG_MONSTER_SEARCH_TAG
const {Model, DataTypes} = require('sequelize');
module.exports = (sequelize, DataTypes)=>{
    class MOSRTG_MONSTER_SEARCH_TAG extends Model{
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models){
            // associated models go here
        }
    }
    MOSRTG_MONSTER_SEARCH_TAG.init({
            MOSRTG_ID:{
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            //: DataTypes.STRING,
            //: DataTypes.INTEGER(8),
            GASYMO_ID: DataTypes.INTEGER(8),
            TGTY_ID: DataTypes.INTEGER(8),
            MOSRTG_KEYWORD: DataTypes.STRING,
            MOSRTG_PRIORITY_VALUE: DataTypes.INTEGER(4),
            MOSRTG_MASTER_MOSRTG_ID: DataTypes.INTEGER(8),
            MOSRTG_MATCH_TABLE: DataTypes.STRING,

            ST_CODE: DataTypes.STRING,
            LAST_MODIFIED_DATE: DataTypes.DATE,
            LAST_MODIFIED_BY: DataTypes.DATE,


        },
        {
            sequelize,
            modelName: 'FGGDATA',
            tableName: 'MOSRTG_MONSTER_SEARCH_TAG',
            createdAt: 'LAST_MODIFIED_DATE',
            updatedAt: 'LAST_MODIFIED_BY',
        }
    )
    return MOSRTG_MONSTER_SEARCH_TAG;
}