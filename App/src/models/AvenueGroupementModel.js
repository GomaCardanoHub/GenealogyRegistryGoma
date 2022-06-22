const db = require('../../connect/index');
const Sequelize = require('sequelize');

const AvenueGroupement = db.define('AvenueGroupements',{ 
    code:{
        type: { type:Sequelize.INTEGER},
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,

    },
    designation:{ type:Sequelize.STRING, allowNull: false}
},
{
        timestamps: false
});
    AvenueGroupement.belongsTo(CommuneTerritoire);