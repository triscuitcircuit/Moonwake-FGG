// MOAL_MONSTER_ALIGNMENT
const {DataTypes} = require('sequelize');
module.exports = (sequelize)=>{
    sequelize.define('MOAL_MONSTER_ALIGNMENT', {
            MOAL_ID:{
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            //: DataTypes.STRING,
            //: DataTypes.INTEGER(8),
            GASYMO_ID: DataTypes.INTEGER(8),
            AL_ID: DataTypes.INTEGER(8),
            MOAL_IS_PRIMARY_FLAG: DataTypes.STRING,
            MOAL_PERCENTAGE_LIKELY: DataTypes.INTEGER(8,2),
            MOAL_DETAIL: DataTypes.STRING,

            ST_CODE: DataTypes.STRING,
            LAST_MODIFIED_DATE: DataTypes.DATE,
            LAST_MODIFIED_BY: DataTypes.DATE,
        },
        {
            sequelize,
            modelName: 'FGGDATA',
            tableName: 'MOAL_MONSTER_ALIGNMENT',
            createdAt: 'LAST_MODIFIED_DATE',
            updatedAt: 'LAST_MODIFIED_BY',
        }
    )
}