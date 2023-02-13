// GASYMOST_GAME_SYS_MONST_STATUS
const {DataTypes} = require('sequelize');
module.exports = (sequelize)=>{
    sequelize.define('GASYMOST_GAME_SYS_MONST_STATUS', {
            GASYMOST_ID:{
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            //: DataTypes.STRING,
            //: DataTypes.INTEGER(8),
            GASYMO_ID: DataTypes.INTEGER(8),
            MOST_ID: DataTypes.INTEGER(8),
            GASYMOST_CHANGED_DATEKEY: DataTypes.INTEGER(8),

            ST_CODE: DataTypes.STRING,
            LAST_MODIFIED_DATE: DataTypes.DATE,
            LAST_MODIFIED_BY: DataTypes.DATE,
        },
        {
            sequelize,
            modelName: 'FGGDATA',
            tableName: 'GASYMOST_GAME_SYS_MONST_STATUS',
            createdAt: 'LAST_MODIFIED_DATE',
            updatedAt: 'LAST_MODIFIED_BY',
        }
    )
}