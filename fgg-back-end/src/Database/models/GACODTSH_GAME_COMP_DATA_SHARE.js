// GACODTSH_GAME_COMP_DATA_SHARE
const {Model, DataTypes} = require('sequelize');
module.exports = (sequelize, DataTypes)=>{
    class GACODTSH_GAME_COMP_DATA_SHARE extends Model{
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models){
            // associated models go here
        }
    }
    GACODTSH_GAME_COMP_DATA_SHARE.init({
            GACODTSH_ID:{
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            //: DataTypes.STRING,
            //: DataTypes.INTEGER(8),
            GRANTOR_GACO_ID: DataTypes.INTEGER(8),
            GRANTEE_GACO_ID: DataTypes.INTEGER(8),
            GACODTSH_ENTITY_NAME: DataTypes.STRING,
            GACODTSH_ALLOWED_FLAG: DataTypes.STRING,
            GACODTSH_ALLOWED_START_DATEKEY: DataTypes.INTEGER(8),
            GACODTSH_DETAIL: DataTypes.STRING,

            ST_CODE: DataTypes.STRING,
            LAST_MODIFIED_DATE: DataTypes.DATE,
            LAST_MODIFIED_BY: DataTypes.DATE,
        },
        {
            sequelize,
            modelName: 'FGGDATA',
            tableName: 'GACODTSH_GAME_COMP_DATA_SHARE',
            createdAt: 'LAST_MODIFIED_DATE',
            updatedAt: 'LAST_MODIFIED_BY',
        }
    )
    return GACODTSH_GAME_COMP_DATA_SHARE;
}