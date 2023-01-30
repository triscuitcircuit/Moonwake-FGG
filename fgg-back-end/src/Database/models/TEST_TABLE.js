const {Model, DataTypes} = require('sequelize');
module.exports = (sequelize, DataTypes)=>{
    class TEST_TABLE extends Model{
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models){
            // associated models go here
        }
    }
    TEST_TABLE.init({
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
    return TEST_TABLE;
}