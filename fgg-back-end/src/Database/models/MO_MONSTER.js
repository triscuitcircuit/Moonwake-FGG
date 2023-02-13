// MO_MONSTER
const {DataTypes} = require('sequelize');
module.exports = (sequelize)=>{
    sequelize.define('MO_MONSTER', {
            MO_ID:{
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            //: DataTypes.STRING,
            //: DataTypes.INTEGER(8),
            PRI_MOTY_ID: DataTypes.INTEGER(8),
            SEC_MOTY_ID: DataTypes.INTEGER(8),
            MO_NAME: DataTypes.STRING,
            MO_SUB_NAME: DataTypes.STRING,
            MO_DISPLAY_NAME: DataTypes.STRING,

            ST_CODE: DataTypes.STRING,
            LAST_MODIFIED_DATE: DataTypes.DATE,
            LAST_MODIFIED_BY: DataTypes.DATE,
        },
        {
            sequelize,
            modelName: 'FGGDATA',
            tableName: 'MO_MONSTER',
            createdAt: 'LAST_MODIFIED_DATE',
            updatedAt: 'LAST_MODIFIED_BY',
        }
    )
}