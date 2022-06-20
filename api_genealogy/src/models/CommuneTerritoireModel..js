const db = require('../../connect/index');
const Sequelize = require('sequelize');
const Province = require('./ProvinceModel.')
const QuartieSecteur= require('./QuartieSecteurModel.')

const CommuneTerritoire = db.define('personnes',{ 
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
    CommuneTerritoire.belongsTo(Province);
    CommuneTerritoire.hasMany(QuartieSecteur, {foreignKey: 'QuartieSecteurId'});

    module.exports = Province;