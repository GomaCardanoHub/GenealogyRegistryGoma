const { villeTerritoir } = require("../database/Databases");
const item = {};

item.addVilleTerritoir = async (req, res) => {
  try {
    const { designation, codeProvince } = req.body;
    const data = await villeTerritoir.create({
      designation: designation,
      codeProvince: codeProvince,
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

item.findAllVilleTerritoir = async (req, res) => {
  try {
    const data = await villeTerritoir.findAll();
    if (data) {
      return res.status(200).json({ msg: `List des provinces`, data: data });
    } else {
      return res.status(400).json({ msg: `No data found`, data: null });
    }
  } catch (error) {
    return res.status(500).json({ msg: error, data: null });
  }
};

item.updateVilleTerritoir = async (req, res) => {
  try {
    const code = req.params.code;
    const { designation, codeProvince } = req.body;
    const data = await villeTerritoir.update(
      {
        designation: designation,
        codeProvince: codeProvince,
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

item.deleteVilleTerritoir = async (req, res) => {
  try {
    const code = req.params.code;
    const data = await villeTerritoir.destroy({
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
