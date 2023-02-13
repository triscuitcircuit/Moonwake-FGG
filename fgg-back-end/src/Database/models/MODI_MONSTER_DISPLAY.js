// MODI_MONSTER_DISPLAY
const {DataTypes} = require('sequelize');
module.exports = (sequelize)=>{
    sequelize.define('MODI_MONSTER_DISPLAY', {
            MODI_ID:{
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            //: DataTypes.STRING,
            //: DataTypes.INTEGER(8),
            GASYMO_ID: DataTypes.INTEGER(8),
            MODI_SECTION_NUMBER: DataTypes.INTEGER(2),
            MODI_LINE_NUMBER: DataTypes.INTEGER(4),
            MODI_COLUMN_NUMBER: DataTypes.INTEGER(2),
            MODI_TEXT: DataTypes.STRING,
            MODI_HTML_TAGGED_TEXT: DataTypes.STRING,
            MODI_XML_TAGGED_TEXT: DataTypes.STRING,

            ST_CODE: DataTypes.STRING,
            LAST_MODIFIED_DATE: DataTypes.DATE,
            LAST_MODIFIED_BY: DataTypes.DATE,

            MODI_PRINT_TEXT: DataTypes.STRING,
        },
        {
            sequelize,
            modelName: 'FGGDATA',
            tableName: 'MODI_MONSTER_DISPLAY',
            createdAt: 'LAST_MODIFIED_DATE',
            updatedAt: 'LAST_MODIFIED_BY',
        }
    )
}