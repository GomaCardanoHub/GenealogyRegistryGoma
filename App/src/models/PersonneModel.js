const { DataTypes } = require("sequelize/types");

module.exports = (sequelize, DataTypes) => {

    const Personne = sequelize.define('Personnes', {
        code: {
            type: { type: DataTypes.INTEGER },
            allowNull: true,
            autoIncrement: true,
            primaryKey: true,

        },
        nomComplet: { type: DataTypes.STRING },
        sexe: { type: DataTypes.STRING },
        dateNes: { type: DataTypes.DATEONLY },
        lieuNes: { type: DataTypes.STRING },
        etatCivile: { type: DataTypes.STRING },
        nationalite: { type: DataTypes.STRING },
        genre: { type: DataTypes.STRING },
        provinceDOrigine: { type: DataTypes.STRING },
        CommuneTerritoirDOrigine: { type: DataTypes.STRING },
        quartieSecteurDOrigine: { type: DataTypes.STRING },
        avenueGroupementDOrigine: { type: DataTypes.STRING },
        telphone: { type: DataTypes.STRING },
        email: { type: DataTypes.STRING },
  
    });
    return Personne;
}