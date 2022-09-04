const { Sequelize, DataTypes, Model} = require('sequelize')
const sequelize = new Sequelize(process.env.PG_URI)

//MODEL
class MeetGreet extends Model{}
MeetGreet.init({
    meet_greet_id: { 
        type: DataTypes.INTEGER, 
        primaryKey: true, 
        autoIncrement: true
    },
    band_id: { 
        type: DataTypes.INTEGER, 
        allowNull: false
    },
    event_id: { 
        type: DataTypes.INTEGER,  
        allowNull: false
    },
}, {sequelize, modelName: 'Meet Greet', tableName:'meet_greet', timestamps: false})


//Export
module.exports = MeetGreet