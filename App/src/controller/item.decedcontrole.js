const { deced } = require('../database/Databases')

const item = {}

item.addDeced = async (req, res) => {
  try {
    const { lieuDeced, dateDeced, resudencePrencipal,resudenceActuel, occupation, motifDeced, codePersonne } = req.body
    const data = await deced.create({
      lieuDeced: lieuDeced,
      dateDeced: dateDeced,
      resudencePrencipal: resudencePrencipal,
      resudenceActuel: resudenceActuel,
      occupation: occupation,
      motifDeced: motifDeced,
      codePersonne: codePersonne,
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

item.findAllDeced = async (req, res) => {
  try {
    const data = await deced.findAll();
    if (data) {
      return res.status(200).json({ msg: `List de deceds`, data: data });
    } else {
      return res.status(400).json({ msg: `No data found`, data: null });
    }
  } catch (error) {
    return res.status(500).json({ msg: error, data: null });
  }
};

item.updateDeced = async (req, res) => {
  try {
    const id = req.params.id;
    const {lieuDeced,dateDeced,resudencePrencipal,resudenceActuel,occupation,motifDeced,codePersonne,} = req.body;
    const data = await deced.update(
      {
        lieuDeced: lieuDeced,
        dateDeced: dateDeced,
        resudencePrencipal: resudencePrencipal,
        resudenceActuel: resudenceActuel,
        occupation: occupation,
        motifDeced: motifDeced,
        codePersonne: codePersonne,
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
item.deleteDeced = async (req, res) => {
  try {
    const id = req.params.id;
    const data = await deced.destroy({ where: { code: id } });
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
