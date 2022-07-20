const { avenue } = require('../connect/index')

const item = {}

item.addAvenue = async (req, res) => {

    try {
    
        const { nomAvenue } = req.body;
        if(!nomAvenue ) res.status(400).json({msg:"remplisser tout les champs"});
        const data = await avenue.create({
          nomCommune: nomAvenue,
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

item.findAllAvenue = async (req, res) => {
  try {
    const data = await avenue.findAll()
    if (data) {
      return res.status(200).json({ msg: `List des Communes`, data: data })
    } else {
      return res.status(400).json({ msg: `No data found`, data: null })
    }
  } catch (error) {
    return res.status(500).json({ msg: error, data: null })
  }
}

item.updateAvenue = async (req, res) => {
  try {
    const code = req.params.code
    const { nomAvenue } = req.body
    if(!nomAvenue ) res.status(400).json({msg:"remplisser tout les champs"});
    const data = await avenue.update(
      {  nomAvenue:nomAvenue},
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
item.deleteAvenue = async (req, res) => {
  try {
    const code = req.params.code
    const data = await avenue.destroy({ where: { code: code } })
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
