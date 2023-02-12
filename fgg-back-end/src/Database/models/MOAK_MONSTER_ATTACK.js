const {DataTypes} = require('sequelize');
module.exports = (sequelize)=>{
    sequelize.define('MOAK_MONSTER_ATTACK', {
            MOAK_ID:{
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            GASYMO_ID: DataTypes.INTEGER(8),
            AT_ID: DataTypes.INTEGER(8),
            ATDE_ID: DataTypes.INTEGER(8),
            MOAK_DISPLAY_TEXT: DataTypes.STRING,
            MOAK_TAGGED_DISPLAY_TEXT: DataTypes.STRING,
            MOAK_ORDER_VALUE: DataTypes.INTEGER(8),
            ST_CODE: DataTypes.STRING,
            LAST_MODIFIED_DATE: DataTypes.DATE,
            LAST_MODIFIED_BY: DataTypes.DATE,
        },
        {
            sequelize,
            modelName: 'FGGDATA',
            tableName: 'MOAK_MONSTER_ATTACK',
            createdAt: 'LAST_MODIFIED_DATE',
            updatedAt: 'LAST_MODIFIED_BY',
        }
    )
}