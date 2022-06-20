const db = require('../../connect/index');
const Sequelize = require('sequelize');
const CommuneTerritoire = require('./CommuneTerritoireModel.')

const Province = db.define('personnes',{ 
    code:{
        type: { type:Sequelize.INTEGER},
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,


    },
    designation:{ type:Sequelize.STRING, allowNull: false},
},
{
    timestamps: false
})
Province.hasMany(CommuneTerritoire, {foreignKey: 'communeTerritoireId'});




  module.exports = Province;