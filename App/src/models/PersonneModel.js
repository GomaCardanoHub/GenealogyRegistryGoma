const db = require('../../connect/index');
const Sequelize = require('sequelize');

const Personne = db.define('personnes',{ 
    code:{
        type: { type:Sequelize.INTEGER},
        allowNull: true,
        autoIncrement: true,
        primaryKey: true,

    },
    nomComplet:{ type:Sequelize.STRING},
    sexe: { type:Sequelize.STRING},
    dateNes:{ type:Sequelize.DATEONLY},
    lieuNes: { type:Sequelize.STRING},
    etatCivile:{ type:Sequelize.STRING},
    nationalite:{ type:Sequelize.STRING},
    genre:{ type:Sequelize.STRING},
    provinceDOrigine:{ type:Sequelize.STRING},
    CommuneTerritoirDOrigine:{ type:Sequelize.STRING},
    quartieSecteurDOrigine:{ type:Sequelize.STRING},
    avenueGroupementDOrigine:{ type:Sequelize.STRING},
    telphone: { type:Sequelize.STRING},
    email:{ type:Sequelize.STRING},
  
},
{
    timestamps: false
});
module.exports = Personne;