// MOLRAT_MONSTER_LAIR_ACTION
const {DataTypes} = require('sequelize');
module.exports = (sequelize)=>{
    sequelize.define('MOLRAT_MONSTER_LAIR_ACTION', {
            MOLRAT_ID:{
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            //: DataTypes.STRING,
            //: DataTypes.INTEGER(8),
            GASYMO_ID: DataTypes.INTEGER(8),
            MOLRAT_DISPLAY_TEXT: DataTypes.STRING,
            MOLRAT_TAGGED_DISPLAY_TEXT: DataTypes.STRING,
            MOLRAT_ORDER_VALUE: DataTypes.INTEGER(4),

            ST_CODE: DataTypes.STRING,
            LAST_MODIFIED_DATE: DataTypes.DATE,
            LAST_MODIFIED_BY: DataTypes.DATE,

        },
        {
            sequelize,
            modelName: 'FGGDATA',
            tableName: 'MOLRAT_MONSTER_LAIR_ACTION',
            createdAt: 'LAST_MODIFIED_DATE',
            updatedAt: 'LAST_MODIFIED_BY',
        }
    )
}