const { avenuegroupement } = require('../database/Databases')

const item = {}

item.addavenuegroupement = async (req, res) => {
  try {
    const { designation, codeQuartier } = req.body
    const data = await avenuegroupement.create({
      designation: designation,
      codeQuartier: codeQuartier,
    })

  

    if (data) {
      return res
        .status(200)
        .json({ msg: `Enregistrement reussi avec succes`, data: data })
    } else {
      return res
        .status(400)
        .json({ msg: `Echeque de l'enregistrement `, data: null })
    }
  } catch (error) {
    return res.status(500).json({ msg: `${error}`, data: null })
  }
}

item.findAllavenuegroupement = async (req, res) => {
  try {
    const data = await avenuegroupement.findAll()
    if (data) {
      return res.status(200).json({ msg: `List des avenues`, data: data })
    } else {
      return res.status(400).json({ msg: `No data found`, data: null })
    }
  } catch (error) {
    return res.status(500).json({ msg: error, data: null })
  }
}

item.updateavenuegroupement = async (req, res) => {
  try {
    
    const id = req.params.id
    const { designation, codeQuartier } = req.body
    const data = await avenuegroupement.update({
      designation: designation,
      codeQuartier: codeQuartier,

      },
      { where: { code: id } },
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
item.deleteavenuegroupement = async (req, res) => {
  try {
    const id = req.params.id
    const data = await avenuegroupement.destroy({ where: { code: id } })
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
