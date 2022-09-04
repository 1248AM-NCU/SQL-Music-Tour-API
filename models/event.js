const { Sequelize, DataTypes, Model} = require('sequelize')
const sequelize = new Sequelize(process.env.PG_URI)

//MODEL
class Event extends Model{}
Event.init({
    event_id: { 
        type: DataTypes.INTEGER, 
        primaryKey: true, 
        autoIncrement: true
    },
    name: { 
        type: DataTypes.STRING, 
        allowNull: false 
    },
}, {sequelize, modelName: 'Event', tableName:'events', timestamps: false})


//Export
module.exports = Event