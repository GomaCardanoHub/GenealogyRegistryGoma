const { mariage } = require("../database/Databases");

const item = {}

item.addMariage = async (req, res) => {
  try {
    const { lieuMariage, dateMariage, resudencePrencipal,resudenceActuel,ocupation,regime, dote, codePersonne,codePersonneConjoint } = req.body
    const data = await mariage.create({
      lieuMariage: lieuMariage,
      dateMariage: dateMariage,
      resudencePrencipal: resudencePrencipal,
      resudenceActuel: resudenceActuel,
      ocupation: ocupation,
      regime: regime,
      dote: dote,
      codePersonne: codePersonne,
      codePersonneConjoint: codePersonneConjoint,
    });
    if (data) {
      return res
        .status(200)
        .json({ msg: `Enregistrement reussi avec succes`, data: data })
    } else {
      return res
        .status(400)
        .json({ msg: `Enregistrement reussi avec succes`, data: null })
    }
  } catch (error) {
    return res.status(500).json({ msg: `${error}`, data: null })
  }
}

item.findAllMariage = async (req, res) => {
  try {
    const data = await mariage.findAll();
    if (data) {
      return res.status(200).json({ msg: `List des mariages`, data: data })
    } else {
      return res.status(400).json({ msg: `No data found`, data: null })
    }
  } catch (error) {
    return res.status(500).json({ msg: error, data: null })
  }
}

item.updateMariage = async (req, res) => {
  try {
    const id = req.params.id;
     const {
       lieuMariage,
       dateMariage,
       resudencePrencipal,
       resudenceActuel,
       ocupation,
       regime,
       dote,
       codePersonne,
       codePersonneConjoint,
     } = req.body;
    const data = await mariage.update(
      {
        lieuMariage: lieuMariage,
        dateMariage: dateMariage,
        resudencePrencipal: resudencePrencipal,
        resudenceActuel: resudenceActuel,
        ocupation: ocupation,
        regime: regime,
        dote: dote,
        codePersonne: codePersonne,
        codePersonneConjoint: codePersonneConjoint,
      },
      { where: { code: id } }
    );
    if (data) {
      return res
        .status(200)
        .json({ msg: `Modication reussi avec succes`, data: data });
    } else {
      return res.status(400).json({ msg: `Modication echouer`, data: null });
    }
  } catch (error) {
    return res.status(500).json({ msg: error, data: null });
  }
};
item.deleteMariage = async (req, res) => {
  try {
    const id = req.params.id;
    const data = await participant.mariage({ where: { code: id } });
    if (data) {
      return res
        .status(200)
        .json({ msg: `Suppression reussi avec succes`, data: data });
    } else {
      return res.status(400).json({ msg: `Suppression echoue`, data: null });
    }
  } catch (error) {
    return res.status(500).json({ msg: error, data: null });
  }
};

module.exports = item
