const {DataTypes} = require('sequelize');
module.exports = (sequelize)=>{
    sequelize.define('RR_RARITY', {
            RR_ID:{
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            //: DataTypes.STRING,
            //: DataTypes.INTEGER(8),
            GASY_ID: DataTypes.INTEGER(8),
            RR_NAME: DataTypes.STRING,
            RR_DETAIL: DataTypes.STRING,
            RR_DISPLAY_NAME: DataTypes.STRING,
            RR_ORDER_VALUE: DataTypes.INTEGER(2),

            ST_CODE: DataTypes.STRING,
            LAST_MODIFIED_DATE: DataTypes.DATE,
            LAST_MODIFIED_BY: DataTypes.DATE,



        },
        {
            sequelize,
            modelName: 'FGGDATA',
            tableName: 'RR_RARITY',
            createdAt: 'LAST_MODIFIED_DATE',
            updatedAt: 'LAST_MODIFIED_BY',
        }
    )
}