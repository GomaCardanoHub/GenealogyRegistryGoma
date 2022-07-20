const { commune } = require('../connect/index')

const item = {}

item.addCommune = async (req, res) => {

    try {
    
      const { nomCommune } = req.body;
      if(!nomCommune ) res.status(400).json({msg:"remplisser tout les champs"});
      const data = await commune.create({
        nomCommune: nomCommune,
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

item.findAllCommune = async (req, res) => {
  try {
    const data = await commune.findAll()
    if (data) {
      return res.status(200).json({ msg: `List des Communes`, data: data })
    } else {
      return res.status(400).json({ msg: `No data found`, data: null })
    }
  } catch (error) {
    return res.status(500).json({ msg: error, data: null })
  }
}

item.updateCommune = async (req, res) => {
  try {
    const code = req.params.code
    const { nomCommune } = req.body
    if(!nomCommune ) res.status(400).json({msg:"remplisser tout les champs"});
    const data = await commune.update(
      {  nomCommune:nomCommune},
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
item.deleteCommune = async (req, res) => {
  try {
    const code = req.params.code
    const data = await commune.destroy({ where: { code: code } })
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
