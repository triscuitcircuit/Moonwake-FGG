// MOAB_MONSTER_ATTRIBUTE
const {DataTypes} = require('sequelize');
module.exports = (sequelize)=>{
    sequelize.define('MOAB_MONSTER_ATTRIBUTE', {
            MOAB_ID:{
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            //: DataTypes.STRING,
            //: DataTypes.INTEGER(8),
            GASYMO_ID: DataTypes.INTEGER(8),
            AB_ID: DataTypes.INTEGER(8),
            MOAB_VALUE: DataTypes.INTEGER(4),
            MOAB_BONUS_VALUE: DataTypes.INTEGER(4),
            MOAB_DISPLAY_TEXT: DataTypes.STRING,
            MOAB_TAGGED_DISPLAY_TEXT: DataTypes.STRING,
            MOAB_ORDER_VALUE: DataTypes.INTEGER(2),

            ST_CODE: DataTypes.STRING,
            LAST_MODIFIED_DATE: DataTypes.DATE,
            LAST_MODIFIED_BY: DataTypes.DATE,
        },
        {
            sequelize,
            modelName: 'FGGDATA',
            tableName: 'MOAB_MONSTER_ATTRIBUTE',
            createdAt: 'LAST_MODIFIED_DATE',
            updatedAt: 'LAST_MODIFIED_BY',
        }
    )
}