const {deced} = require('../connect/index');
const item = {}

item.addQuartier= async (req, res) => {

    try {
    
      const { nomQuartier } = req.body;
      if(!nomQuartier)return res.status(400).json({msg:'Remlisser tous les champs svp'});
      const data = await quartier.create({
        nomQuartier: nomQuartier,
    })

    if (data) {
      return res
        .status(200)
        .json({ msg: `Enregistrement reussi avec succes`, data: data })
    } else {
      return res
        .status(400)
        .json({ msg: `Enregistrement a echouer`, data: null })
    }
  } catch (error) {
    return res.status(500).json({ msg: `${error}`, data: null })
  }
}

item.findAllQuartier = async (req, res) => {
  try {
    const data = await quartier.findAll()
    if (data) {
      return res.status(200).json({ msg: `List des Quartiers`, data: data })
    } else {
      return res.status(400).json({ msg: `No data found`, data: null })
    }
  } catch (error) {
    return res.status(500).json({ msg: error, data: null })
  }
}

item.updateQuartier = async (req, res) => {
  try {
    const code = req.params.code
    const { nomQuartier } = req.body
    const data = await quartier.update(
      {  nomQuartier},
      { where: { code: code } },
    )
    if (data) {
      return res
        .status(200)
        .json({ msg: `Modication reussi avec succes`, data: data })
    } else {
      return res.status(400).json({ msg: `Modication echouer`, data: null })
    }
  } catch (error) {
    return res.status(500).json({ msg: error, data: null })
  }
}
item.deleteQuartier = async (req, res) => {
  try {
    const code = req.params.code
    const data = await quartier.destroy({ where: { code: code } })
    if (data) {
      return res
        .status(200)
        .json({ msg: `Suppression reussi avec succes`, data: data })
    } else {
      return res.status(400).json({ msg: `Suppression echoue`, data: null })
    }
  } catch (error) {
    return res.status(500).json({ msg: error, data: null })
  }
}

module.exports = item
