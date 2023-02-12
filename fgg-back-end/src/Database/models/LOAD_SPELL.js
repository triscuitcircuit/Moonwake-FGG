const {DataTypes} = require('sequelize');
module.exports = (sequelize)=>{
    sequelize.define('LOAD_SPELL', {
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
}