// MOAL_MONSTER_ALIGNMENT
const {Model, DataTypes} = require('sequelize');
module.exports = (sequelize, DataTypes)=>{
    class MOAL_MONSTER_ALIGNMENT extends Model{
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models){
            // associated models go here
        }
    }
    MOAL_MONSTER_ALIGNMENT.init({
            MOAL_ID:{
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            //: DataTypes.STRING,
            //: DataTypes.INTEGER(8),
            GASYMO_ID: DataTypes.INTEGER(8),
            AL_ID: DataTypes.INTEGER(8),
            MOAL_IS_PRIMARY_FLAG: DataTypes.STRING,
            MOAL_PERCENTAGE_LIKELY: DataTypes.INTEGER(8,2),
            MOAL_DETAIL: DataTypes.STRING,

            ST_CODE: DataTypes.STRING,
            LAST_MODIFIED_DATE: DataTypes.DATE,
            LAST_MODIFIED_BY: DataTypes.DATE,
        },
        {
            sequelize,
            modelName: 'FGGDATA',
            tableName: 'MOAL_MONSTER_ALIGNMENT',
            createdAt: 'LAST_MODIFIED_DATE',
            updatedAt: 'LAST_MODIFIED_BY',
        }
    )
    return MOAL_MONSTER_ALIGNMENT;
}