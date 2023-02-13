const {DataTypes} = require('sequelize');
module.exports = (sequelize)=>{sequelize.define('LOAD_TRAIT2',{
            LO_ID:{
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },

            TRAIT_NAME: DataTypes.STRING,
            TRAIT_DETAIL: DataTypes.STRING,
            FGG_IP: DataTypes.INTEGER(2),
        },
        {
            sequelize,
            modelName: 'FGGDATA',
            tableName: 'LOAD_TRAIT2',
            createdAt: 'LAST_MODIFIED_DATE',
            updatedAt: 'LAST_MODIFIED_BY',
        }
    )
}