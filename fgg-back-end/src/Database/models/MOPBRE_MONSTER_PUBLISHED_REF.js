// MOPBRE_MONSTER_PUBLISHED_REF
const {DataTypes} = require('sequelize');
module.exports = (sequelize)=>{
    sequelize.define('MOPBRE_MONSTER_PUBLISHED_REF', {
            MOPBRE_ID:{
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            //: DataTypes.STRING,
            //: DataTypes.INTEGER(8),
            GASYMO_ID: DataTypes.INTEGER(8),
            PBRE_ID: DataTypes.INTEGER(8),
            MOPBRE_ORDER_VALUE: DataTypes.INTEGER(4),
            MOPBRE_START_PAGE_NUMBER: DataTypes.INTEGER(4),
            MOPBRE_END_PAGE_NUMBER: DataTypes.INTEGER(4),
            MOPBRE_DETAIL: DataTypes.STRING,

            ST_CODE: DataTypes.STRING,
            LAST_MODIFIED_DATE: DataTypes.DATE,
            LAST_MODIFIED_BY: DataTypes.DATE,

        },
        {
            sequelize,
            modelName: 'FGGDATA',
            tableName: 'MOPBRE_MONSTER_PUBLISHED_REF',
            createdAt: 'LAST_MODIFIED_DATE',
            updatedAt: 'LAST_MODIFIED_BY',
        }
    )
}