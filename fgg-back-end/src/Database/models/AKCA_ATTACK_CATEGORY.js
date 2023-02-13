const {DataTypes} = require('sequelize');
module.exports = (sequelize)=>{
    sequelize.define('AKCA_ATTACK_CATEGORY',{
            AKCA_ID:{
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            AKCA_GASY_ID: DataTypes.INTEGER(8),
            AKCA_NAME: DataTypes.STRING,
            AKCA_DETAIL: DataTypes.STRING,
            AKCA_DISPLAY_NAME: DataTypes.STRING,
            ST_CODE: DataTypes.STRING,
            LAST_MODIFIED_DATE: DataTypes.DATE,
            LAST_MODIFIED_BY: DataTypes.DATE,
        },
        {
            sequelize,
            modelName: 'FGGDATA',
            tableName: 'AKCA_ATTACK_CATEGORY',
            createdAt: 'LAST_MODIFIED_DATE',
            updatedAt: 'LAST_MODIFIED_BY',
        }
    )
}