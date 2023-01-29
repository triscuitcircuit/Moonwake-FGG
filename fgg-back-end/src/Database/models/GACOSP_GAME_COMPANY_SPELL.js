// GACOSP_GAME_COMPANY_SPELL
const {Model, DataTypes} = require('sequelize');
module.exports = (sequelize, DataTypes)=>{
    class GACOSP_GAME_COMPANY_SPELL extends Model{
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models){
            // associated models go here
        }
    }
    GACOSP_GAME_COMPANY_SPELL.init({
            GACOSP_ID:{
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            //: DataTypes.STRING,
            //: DataTypes.INTEGER(8),
            GACO_ID: DataTypes.INTEGER(8),
            SP_ID: DataTypes.INTEGER(8),

            ST_CODE: DataTypes.STRING,
            LAST_MODIFIED_DATE: DataTypes.DATE,
            LAST_MODIFIED_BY: DataTypes.DATE,
        },
        {
            sequelize,
            modelName: 'FGGDATA',
            tableName: 'GACOSP_GAME_COMPANY_SPELL',
            createdAt: 'LAST_MODIFIED_DATE',
            updatedAt: 'LAST_MODIFIED_BY',
        }
    )
    return GACOSP_GAME_COMPANY_SPELL;
}