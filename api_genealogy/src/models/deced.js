const db = require('../../connect/index');
const Sequelize = require('sequelize');

const Deced = db.define('deceds',{ 
    code:{
        type: { type:Sequelize.INTEGER},
        allowNull: true,
        autoIncrement: true,
        primaryKey: true,

    },
    lieuDeced: { type:Sequelize.STRING},
    dateDeced: { type:Sequelize.DATE},
    resudencePrencipal:{ type:Sequelize.DATE},
    resudenceActuel:{ type:Sequelize.DATE},
    ocupation:{ type:Sequelize.DATE},
    motifDeced: { type:Sequelize.STRING},
    codePersonne:{ type:Sequelize.INTEGER},
},
{
    timestamps: false
});
module.exports = Deced;