const { quartiercollectivite } = require("../database/Databases");
const item = {};

item.addQuartierCollectivite = async (req, res) => {
  try {
    const { designation, codeCommune } = req.body;
    const data = await quartiercollectivite.create({
      designation: designation,
      codeCommune: codeCommune,
    });
    if (data) {
      return res
        .status(200)
        .json({ msg: `Enregistrement reussi avec succes`, data: data });
    } else {
      return res.status(400).json({ msg: `Enregistrement echoue`, data: null });
    }
  } catch (error) {
    return res.status(500).json({ msg: error, data: null });
  }
};

item.findAllQuartierCollectivite = async (req, res) => {
  try {
    const data = await quartiercollectivite.findAll();
    if (data) {
      return res.status(200).json({ msg: `List des provinces`, data: data });
    } else {
      return res.status(400).json({ msg: `No data found`, data: null });
    }
  } catch (error) {
    return res.status(500).json({ msg: error, data: null });
  }
};

item.updateQuartierCollectivite = async (req, res) => {
  try {
    const code = req.params.code;
    const { designation, codeCommune } = req.body;
    const data = await quartiercollectivite.update(
      {
        designation: designation,
        codeCommune: codeCommune,
      },
      { where: { code: code } }
    );
    if (data) {
      return res
        .status(200)
        .json({ msg: `Enregistrement reussi avec succes`, data: data });
    } else {
      return res.status(400).json({ msg: `Enregistrement echoue`, data: null });
    }
  } catch (error) {
    return res.status(500).json({ msg: error, data: null });
  }
};

item.deleteQuartierCollectivite = async (req, res) => {
  try {
    const code = req.params.code;
    const data = await quartiercollectivite.destroy({
      where: { code: code },
    });
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

module.exports = item;
