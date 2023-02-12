const {DataTypes} = require('sequelize');
module.exports = (sequelize)=>{
    sequelize.define('USRO_USER_ROLE', {
            USRO_ID:{
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            US_ID: DataTypes.INTEGER(8),
            RO_ID: DataTypes.INTEGER(8),
            USRO_CREATED_DATEKEY: DataTypes.INTEGER(8),
            USRO_ENABLED_DATEKEY: DataTypes.INTEGER(8),
            USRO_RETIRED_DATEKEY: DataTypes.INTEGER(8),
            ST_CODE: DataTypes.STRING,
            LAST_MODIFIED_DATE: DataTypes.DATE,
            LAST_MODIFIED_BY: DataTypes.DATE,
        },
        {
            sequelize,
            modelName: 'FGGDATA',
            tableName: 'USRO_USER_ROLE',
            createdAt: 'LAST_MODIFIED_DATE',
            updatedAt: 'LAST_MODIFIED_BY',
        }
    )
}