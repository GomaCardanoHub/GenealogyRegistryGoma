const {deced} = require('../connect/index');
const item = {}

item.addProvince = async (req, res) => {

    try {
    
      const { nomProvince } = req.body;
      if(!nomProvince)return res.status(400).json({msg:'Remlisser tous les champs svp'});
      const data = await province.create({
        nomProvince: nomProvince,
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

item.findAllProvince = async (req, res) => {
  try {
    const data = await province.findAll()
    if (data) {
      return res.status(200).json({ msg: `List des Province`, data: data })
    } else {
      return res.status(400).json({ msg: `No data found`, data: null })
    }
  } catch (error) {
    return res.status(500).json({ msg: error, data: null })
  }
}

item.updateProvince = async (req, res) => {
  try {
    const code = req.params.code
    const {  nomProvince } = req.body
    const data = await province.update(
      {  nomProvince},
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
item.deleteProvince = async (req, res) => {
  try {
    const code = req.params.code
    const data = await province.destroy({ where: { code: code } })
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
