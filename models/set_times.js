const { Sequelize, DataTypes, Model} = require('sequelize')
const sequelize = new Sequelize(process.env.PG_URI)

//MODEL
class SetTime extends Model{}
SetTime.init({
    set_times_id: { 
        type: DataTypes.INTEGER, 
        primaryKey: true, 
        autoIncrement: true
    },
    band_id: { 
        type: DataTypes.INTEGER, 
        allowNull: false 
    },
    event_stage: { 
        type: DataTypes.INTEGER, 
        allowNull: false 
    },
    time: { 
        type: DataTypes.DATE, 
        allowNull: false 
    },
}, {sequelize, modelName: 'Set Times', tableName:'set_times', timestamps: false})


//Export
module.exports = SetTime