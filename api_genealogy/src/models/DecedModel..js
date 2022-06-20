const db = require('../../connect/index');
const Sequelize = require('sequelize');

const Deced = db.define('deceds',{ 
    code:{
        type: { type:Sequelize.INTEGER},
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,

    },
    lieuDeced: { type:Sequelize.STRING},
    dateDeced: { type:Sequelize.DATEONLY},
    resudencePrencipal:{ type:Sequelize.STRING},
    resudenceActuel:{ type:Sequelize.STRING},
    ocupation:{ type:Sequelize.STRING},
    motifDeced: { type:Sequelize.STRING},
    codePersonne:{ type:Sequelize.INTEGER},
},
{
    timestamps: false
});
module.exports = Deced;