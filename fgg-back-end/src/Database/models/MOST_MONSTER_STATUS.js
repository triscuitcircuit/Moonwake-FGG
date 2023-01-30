// MOST_MONSTER_STATUS
const {Model, DataTypes} = require('sequelize');
module.exports = (sequelize, DataTypes)=>{
    class MOST_MONSTER_STATUS extends Model{
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models){
            // associated models go here
        }
    }
    MOST_MONSTER_STATUS.init({
            MOST_ID:{
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            //: DataTypes.STRING,
            //: DataTypes.INTEGER(8),
            MOST_NAME: DataTypes.STRING,
            MOST_DETAIL: DataTypes.STRING,
            MOST_DISPLAY_NAME: DataTypes.STRING,
            MOST_ORDER_VALUE: DataTypes.INTEGER(2),

            ST_CODE: DataTypes.STRING,
            LAST_MODIFIED_DATE: DataTypes.DATE,
            LAST_MODIFIED_BY: DataTypes.DATE,


        },
        {
            sequelize,
            modelName: 'FGGDATA',
            tableName: 'MOST_MONSTER_STATUS',
            createdAt: 'LAST_MODIFIED_DATE',
            updatedAt: 'LAST_MODIFIED_BY',
        }
    )
    return MOST_MONSTER_STATUS;
}