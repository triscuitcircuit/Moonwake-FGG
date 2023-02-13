// MOTY_MONSTER_TYPE

const {DataTypes} = require('sequelize');
module.exports = (sequelize)=>{
    sequelize.define('MOTY_MONSTER_TYPE', {
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
}