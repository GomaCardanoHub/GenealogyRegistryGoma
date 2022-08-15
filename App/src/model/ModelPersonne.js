module.exports = (sequelize, DataTypes) => {
  const personnes = sequelize.define("Personnes", {
    code: {
      type: DataTypes.INTEGER,
      allowNull: true,
      autoIncrement: true,
      primaryKey: true,
    },
        nomComplet:  DataTypes.STRING ,
        dateNes: DataTypes.DATEONLY ,
        lieuNes: DataTypes.STRING ,
        etatCivilee: DataTypes.STRING ,
        nationalite: DataTypes.STRING ,
        genre: DataTypes.STRING ,
        provinceDOrigine: DataTypes.STRING ,
        CommuneTerritoirDOrigine: DataTypes.STRING ,
        quartieSecteurDOrigine: DataTypes.STRING ,
        avenueGroupementDOrigine: DataTypes.STRING ,
        telphone: DataTypes.STRING ,
        email: DataTypes.STRING ,
  });
    return personnes;
};
