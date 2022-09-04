const { Sequelize, DataTypes, Model} = require('sequelize')
const sequelize = new Sequelize(process.env.PG_URI)

//MODEL
class EventStage extends Model{}
EventStage.init({
    event_stage_id: { 
        type: DataTypes.INTEGER, 
        primaryKey: true, 
        autoIncrement: true
    },
    event_id: { 
        type: DataTypes.INTEGER, 
        allowNull: false 
    },
    stage_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
}, {sequelize, modelName: 'Event_Stage', tableName:'events_stages', timestamps: false})


//Export
module.exports = EventStage