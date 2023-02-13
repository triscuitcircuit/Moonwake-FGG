const {DataTypes} = require('sequelize');
module.exports = (sequelize)=>{
    sequelize.define('USGASYMO_USER_GAME_SYS_MONSTER',{
            USGASYMO_ID:{
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            GASYMO_ID: DataTypes.INTEGER(8),
            USGASYMO_IS_CREATOR_FLAG: DataTypes.STRING,
            USGASYMO_FOR_PUBLIC_FLAG: DataTypes.STRING,
            USGASYMO_DETAIL: DataTypes.STRING,
            US_ID: DataTypes.INTEGER(8),
            ST_CODE: DataTypes.STRING,
            LAST_MODIFIED_DATE: DataTypes.DATE,
            LAST_MODIFIED_BY: DataTypes.DATE,
            USGASYMO_CAN_BE_EDITED: DataTypes.STRING,
        },
        {
            sequelize,
            modelName: 'FGGDATA',
            tableName: 'USGASYMO_USER_GAME_SYS_MONSTER',
            createdAt: 'LAST_MODIFIED_DATE',
            updatedAt: 'LAST_MODIFIED_BY',
        }
    )
}