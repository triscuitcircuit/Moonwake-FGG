// MOPP_MONSTER_PROPERTY
const {DataTypes} = require('sequelize');
module.exports = (sequelize)=>{
    sequelize.define('MOPP_MONSTER_PROPERTY', {
            MOPP_ID:{
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            //: DataTypes.STRING,
            //: DataTypes.INTEGER(8),
            GASYMO_ID: DataTypes.INTEGER(8),
            PP_ID: DataTypes.INTEGER(8),
            MOPP_DISPLAY_TEXT: DataTypes.STRING,
            MOPP_TAGGED_DISPLAY_TEXT: DataTypes.STRING,
            MOPP_ORDER_VALUE: DataTypes.INTEGER(2),

            ST_CODE: DataTypes.STRING,
            LAST_MODIFIED_DATE: DataTypes.DATE,
            LAST_MODIFIED_BY: DataTypes.DATE,

            MOPP_CHAR_VALUE: DataTypes.STRING,
            MOPP_NUMBER_VALUE: DataTypes.INTEGER(8),
        },
        {
            sequelize,
            modelName: 'FGGDATA',
            tableName: 'MOPP_MONSTER_PROPERTY',
            createdAt: 'LAST_MODIFIED_DATE',
            updatedAt: 'LAST_MODIFIED_BY',
        }
    )
}