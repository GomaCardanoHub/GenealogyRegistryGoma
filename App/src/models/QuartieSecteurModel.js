const db = require('../../connect/index');
const Sequelize = require('sequelize');
const CommuneTerritoire = require('./CommuneTerritoireModel');
const AvenueGroupement = require('./avenueGroupementModel')

const QuartieSecteur = db.define('QuartieSecteurs',{ 
    code:{
        type: { type:Sequelize.INTEGER},
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,

    },
    designation:{ type:Sequelize.STRING,allowNull: false}
},
{
    timestamps: false
});

    QuartieSecteur.belongsTo(CommuneTerritoire);
    QuartieSecteur.hasMany(AvenueGroupement, {foreignKey: 'AvenueGroupementId'});