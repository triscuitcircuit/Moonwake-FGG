const {DataTypes} = require('sequelize');
module.exports = (sequelize)=>{
    sequelize.define('TEST_TABLE', {
            TEST_ID:{
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            //: DataTypes.STRING,
            //: DataTypes.INTEGER(8),
            STRING1: DataTypes.STRING,
            STRING2: DataTypes.STRING,

        },
        {
            sequelize,
            modelName: 'FGGDATA',
            tableName: 'TEST_TABLE',
            createdAt: 'LAST_MODIFIED_DATE',
            updatedAt: 'LAST_MODIFIED_BY',
        }
    )
}