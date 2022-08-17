const { communesecteurchefferie } = require("../database/Databases");
const item = {}

item.addCommunesecteurchefferie = async (req, res) => {
  try {
    const { designation, contecodeVillenir } = req.body;
    const data = await communesecteurchefferie.create({
      designation: designation,
      contecodeVillenir: contecodeVillenir,
    });
    if (data) {
      return res
        .status(200)
        .json({ msg: `Enregistrement reussi avec succes`, data: data });
    } else {
      return res.status(400).json({ msg: `Enregistrement echoue`, data: null });
    }
  } catch (error) {
    return res.status(500).json({ msg: `${error}`, data: null });
  }
};

item.findCommunesecteurchefferie = async (req, res) => {
  try {
    const data = await communesecteurchefferie.findAll();
    if (data) {
      return res.status(200).json({ msg: `Liste des Communesecteurchefferies`, data: data });
    } else {
      return res.status(404).json({ msg: `Not Data`, data: null });
    }
  } catch (error) {
    return res.status(500).json({ msg: `${error}`, data: null });
  }
};

item.updateCommunesecteurchefferie = async (req, res) => {
  try {
    const code = req.params.code;
    const { designation, contecodeVillenir } = req.body;
    const data = await communesecteurchefferie.update(
      {
        designation: designation,
        contecodeVillenir: contecodeVillenir,
      },
      { where: { code: code } }
    );
    if (data) {
      return res
        .status(200)
        .json({ msg: `Modification reussi avec succes`, data: data });
    } else {
      return res.status(400).json({ msg: `Modification echoue`, data: null });
    }
  } catch (error) {
    return res.status(500).json({ msg: `${error}`, data: null });
  }
};

item.deleteCommunesecteurchefferie = async (req, res) => {
  try {
    const data = await communesecteurchefferie.destroy({
      where: { code: req.params.code },
    });
    if (data) {
      return res
        .status(200)
        .json({ msg: `Suppression reussi avec succes`, data: data });
    } else {
      return res.status(400).json({ msg: `Suppression echoue`, data: null });
    }
  } catch (error) {
    return res.status(500).json({ msg: `${error}`, data: null });
  }
};


module.exports = item
