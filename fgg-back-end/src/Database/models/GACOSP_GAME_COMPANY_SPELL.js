// GACOSP_GAME_COMPANY_SPELL
const {DataTypes} = require('sequelize');
module.exports = (sequelize)=>{
    sequelize.define('GACOSP_GAME_COMPANY_SPELL', {
            GACOSP_ID:{
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            //: DataTypes.STRING,
            //: DataTypes.INTEGER(8),
            GACO_ID: DataTypes.INTEGER(8),
            SP_ID: DataTypes.INTEGER(8),

            ST_CODE: DataTypes.STRING,
            LAST_MODIFIED_DATE: DataTypes.DATE,
            LAST_MODIFIED_BY: DataTypes.DATE,
        },
        {
            sequelize,
            modelName: 'FGGDATA',
            tableName: 'GACOSP_GAME_COMPANY_SPELL',
            createdAt: 'LAST_MODIFIED_DATE',
            updatedAt: 'LAST_MODIFIED_BY',
        }
    )
}