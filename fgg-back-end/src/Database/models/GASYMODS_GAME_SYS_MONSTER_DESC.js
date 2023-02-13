// GASYMODS_GAME_SYS_MONSTER_DESC
const {DataTypes} = require('sequelize');
module.exports = (sequelize)=>{
    sequelize.define('GASYMODS_GAME_SYS_MONSTER_DESC', {
            GASYMODS_ID:{
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            //: DataTypes.STRING,
            //: DataTypes.INTEGER(8),
            GASYMO_ID: DataTypes.INTEGER(8),
            GASYMODS_TEXT_CATEGORY: DataTypes.STRING,
            GASYMODS_TEXT: DataTypes.STRING,
            GASYMODS_HTML_TEXT: DataTypes.STRING,
            GASYMODS_ORDER_VALUE: DataTypes.INTEGER(4),

            ST_CODE: DataTypes.STRING,
            LAST_MODIFIED_DATE: DataTypes.DATE,
            LAST_MODIFIED_BY: DataTypes.DATE,
        },
        {
            sequelize,
            modelName: 'FGGDATA',
            tableName: 'GASYMODS_GAME_SYS_MONSTER_DESC',
            createdAt: 'LAST_MODIFIED_DATE',
            updatedAt: 'LAST_MODIFIED_BY',
        }
    )
}