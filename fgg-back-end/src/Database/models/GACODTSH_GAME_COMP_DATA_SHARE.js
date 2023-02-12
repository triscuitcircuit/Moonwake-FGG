// GACODTSH_GAME_COMP_DATA_SHARE
const {DataTypes} = require('sequelize');
module.exports = (sequelize)=>{
    sequelize.define('GACODTSH_GAME_COMP_DATA_SHARE',{
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
}