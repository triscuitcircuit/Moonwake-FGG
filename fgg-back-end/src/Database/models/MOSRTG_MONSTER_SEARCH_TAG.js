// MOSRTG_MONSTER_SEARCH_TAG
const {DataTypes} = require('sequelize');
module.exports = (sequelize)=>{
    sequelize.define('MOSRTG_MONSTER_SEARCH_TAG', {
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
}