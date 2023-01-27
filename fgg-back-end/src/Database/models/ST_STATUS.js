const {Model, DataTypes} = require('sequelize');
module.exports = (sequelize, DataTypes)=>{
    class ST_STATUS extends Model{

        //ST_STATUS
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models){
            // associated models go here
        }
    }
    ST_STATUS.init({
            AB_ID:{
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            ST_NAME: DataTypes.STRING,
            ST_DETAIL: DataTypes.STRING,

            LAST_MODIFIED_DATE: DataTypes.DATE,
            LAST_MODIFIED_BY: DataTypes.DATE,
        },
        {
            sequelize,
            modelName: 'FGGDATA',
            tableName: 'ST_STATUS',
            createdAt: 'LAST_MODIFIED_DATE',
            updatedAt: 'LAST_MODIFIED_BY',
        }
    )
    return ST_STATUS;
}