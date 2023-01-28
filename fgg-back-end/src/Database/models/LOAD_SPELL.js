const {Model, DataTypes} = require('sequelize');
module.exports = (sequelize, DataTypes)=>{
    class LOAD_SPELL extends Model{
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models){
        }
    }
    LOAD_SPELL.init({
            LO_ID:{
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            SPELL_NAME: DataTypes.STRING,
            SPELL_SCHOOL: DataTypes.STRING,
            SPELL_LEVEL: DataTypes.INTEGER(2),
            SPELL_CLASS1: DataTypes.STRING,
            SPELL_CLASS2: DataTypes.STRING,
            SPELL_CLASS3: DataTypes.STRING,
            SPELL_CLASS4: DataTypes.STRING,
            SPELL_CLASS5: DataTypes.STRING,
            SPELL_CLASS6: DataTypes.STRING,
            SPELL_CLASS7: DataTypes.STRING,
            SPELL_IS_FGG_IP: DataTypes.INTEGER(2),
            SPELL_COMPONENTS: DataTypes.STRING,
            SPELL_IS_RITUAL: DataTypes.INTEGER(2),
        },
        {
            sequelize,
            modelName: 'FGGDATA',
            tableName: 'LOAD_SPELL',
            createdAt: 'LAST_MODIFIED_DATE',
            updatedAt: 'LAST_MODIFIED_BY',
        }
    )
    return LOAD_SPELL;
}