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
    dateMariage: { type:Sequelize.DATEONLY, defaultValue:Sequelize.DataTypes.NOW},
    resudencePrencipal:{ type:Sequelize.STRING},
    resudenceActuel:{ type:Sequelize.STRING},
    ocupation:{ type:Sequelize.STRING},
    regime: { type:Sequelize.STRING},
    dote: { type:Sequelize.STRING},
    codePersonne:{ type:Sequelize.INTEGER},
    codePersonneConjoint:{ type:Sequelize.INTEGER},
},
{
    timestamps: false
});
module.exports = Mariage;