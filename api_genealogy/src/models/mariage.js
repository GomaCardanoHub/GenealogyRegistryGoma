const db = require('../../connect/index');
const Sequelize = require('sequelize');

const Mariage = db.define('mariages',{ 
    code:{
        type: { type:Sequelize.INTEGER},
        allowNull: true,
        autoIncrement: true,
        primaryKey: true,

    },
    lieuMariage: { type:Sequelize.STRING},
    dateMariage: { type:Sequelize.DATE},
    resudencePrencipal:{ type:Sequelize.DATE},
    resudenceActuel:{ type:Sequelize.DATE},
    ocupation:{ type:Sequelize.DATE},
    regime: { type:Sequelize.STRING},
    dote: { type:Sequelize.STRING},
    codePersonne:{ type:Sequelize.INTEGER},
    codePersonneConjoint:{ type:Sequelize.INTEGER},
},
{
    timestamps: false
});
module.exports = Mariage;