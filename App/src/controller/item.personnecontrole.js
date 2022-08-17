const { personne } = require('../database/Databases')
const item = {}

item.addPersonne = async (req, res) => {
  try {
    const {
      nomComplet,
      dateNes,
      lieuNes,
      etatCivilee,
      nationalite,
      genre,
      provinceDOrigine,
      CommuneTerritoirDOrigine,
      quartieSecteurDOrigine,
      avenueGroupementDOrigine,
      telphone,
      email
    } = req.body;
    const data = await personne.create({
      nomComplet: nomComplet,
      dateNes: dateNes,
      lieuNes: lieuNes,
      etatCivilee: etatCivilee,
      nationalite: nationalite,
      genre: genre,
      provinceDOrigine: provinceDOrigine,
      CommuneTerritoirDOrigine: CommuneTerritoirDOrigine,
      quartieSecteurDOrigine: quartieSecteurDOrigine,
      avenueGroupementDOrigine: avenueGroupementDOrigine,
      telphone: telphone,
      email: email,
    });
    if (data) {
      return res
        .status(200)
        .json({ msg: `Enregistrement reussi avec succes`, data: data })
    } else {
      return res.status(200).json({ msg: `Enregistrement echoue`, data: null })
    }
  } catch (error) {
    return res.status(500).json({ msg: error, data: null })
  }
}
item.findAllPersonne = async (req, res) => {
  try {
    const data = await personne.findAll();
    if (data) {
      return res.status(200).json({ msg: `List de citoyens`, data: data });
    } else {
      return res.status(400).json({ msg: `No data found`, data: null });
    }
  } catch (error) {
    return res.status(500).json({ msg: error, data: null });
  }
};

item.updatePersonne = async (req, res) => {
  try {
    const code = req.params.id;
    const {
      nomComplet,
      dateNes,
      lieuNes,
      etatCivilee,
      nationalite,
      genre,
      provinceDOrigine,
      CommuneTerritoirDOrigine,
      quartieSecteurDOrigine,
      avenueGroupementDOrigine,
      telphone,
      email,
    } = req.body;
    const data = await personne.update(
      {
        nomComplet: nomComplet,
        dateNes: dateNes,
        lieuNes: lieuNes,
        etatCivilee: etatCivilee,
        nationalite: nationalite,
        genre: genre,
        provinceDOrigine: provinceDOrigine,
        CommuneTerritoirDOrigine: CommuneTerritoirDOrigine,
        quartieSecteurDOrigine: quartieSecteurDOrigine,
        avenueGroupementDOrigine: avenueGroupementDOrigine,
        telphone: telphone,
        email: email,
      },
      { where: { code: code } }
    );
    if (data) {
      return res
        .status(200)
        .json({ msg: `Modication reussi avec succes`, data: data });
    } else {
      return res.status(400).json({ msg: `Modification`, data: null });
    }
  } catch (error) {
    return res.status(500).json({ msg: error, data: null });
  }
};
item.deletePersonne = async (req, res) => {
  try {
    const code = req.params.code;
    const data = await personne.destroy({ where: { code: code } });
    if (data) {
      return res
        .status(200)
        .json({ msg: `Suppression reussi avec succes`, data: data });
    } else {
      return res.status(404).json({ msg: `Suppression echoue` });
    }
  } catch (error) {
    return res.status(500).json({ msg: error });
  }
};
module.exports = item
