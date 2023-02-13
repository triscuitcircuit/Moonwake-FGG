// RENO_REVIEW_NOTES
const {DataTypes} = require('sequelize');
module.exports = (sequelize)=>{
    sequelize.define('RENO_REVIEW_NOTES', {
            RENO_ID:{
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            //: DataTypes.STRING,
            //: DataTypes.INTEGER(8),
            US_ID: DataTypes.INTEGER(8),
            GASYMO_ID: DataTypes.INTEGER(8),
            RENO_TOPIC: DataTypes.STRING,
            RENO_DETAIL: DataTypes.STRING,
            RENO_RESOLVED_FLAG: DataTypes.STRING,
            RENO_ORDER_VALUE: DataTypes.INTEGER(4),

            ST_CODE: DataTypes.STRING,
            LAST_MODIFIED_DATE: DataTypes.DATE,
            LAST_MODIFIED_BY: DataTypes.DATE,



        },
        {
            sequelize,
            modelName: 'FGGDATA',
            tableName: 'RENO_REVIEW_NOTES',
            createdAt: 'LAST_MODIFIED_DATE',
            updatedAt: 'LAST_MODIFIED_BY',
        }
    )
}