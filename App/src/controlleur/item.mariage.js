const { mariage } = require('../connect/index')

const item = {}

item.addMariage = async (req, res) => {

    try {
    const{lieuMariage,dateMariage,resudencePrencipal, resudenceActuel,ocupation,regime,dote,codePersonne,codePersonneConjoint} = req.body;
    if(!lieuMariage||!dateMariage||!resudencePrencipal||!resudenceActuel||!ocupation||!regime||!dote||!codePersonne||!codePersonneConjoint)return res.status(400).json({msg:'Remplissez tout les champs svp'});
    mariage.create({
        lieuMariage:lieuMariage,
        dateMariage:dateMariage,
        resudencePrencipal:resudencePrencipal,
        resudenceActuel:resudenceActuel,
        ocupation:ocupation,
        regime:regime,
        dote:dote,
        codePersonne:codePersonne,
        codePersonneConjoint:codePersonneConjoint,
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
item.findAllMariage = async (req, res) => {

    try {
    
        const data = await mariage.findAll()
        if (data) {
         return res.status(200).json({ msg: `List des Mariages`, data: data })
        } else {
         return res.status(400).json({ msg: `No data found`, data: null })
    }
    } catch (error) {
        return res.status(500).json({ msg: error, data: null })
    }
}

item.updateMariage = async (req, res) => {
  try {
    const code = req.params.code
    const{lieuMariage,dateMariage,resudencePrencipal, resudenceActuel,ocupation,regime,dote,codePersonne,codePersonneConjoint} = req.body;
    if(!lieuMariage||!dateMariage||!resudencePrencipal||!resudenceActuel||!ocupation||!regime||!dote||!codePersonne||!codePersonneConjoint)return res.status(400).json({msg:'Remplissez tout les champs svp'});
    const data = await mariage.update(
        { lieuMariage:lieuMariage,
            dateMariage:dateMariage,
            resudencePrencipal:resudencePrencipal,
            resudenceActuel:resudenceActuel,
            ocupation:ocupation,
            regime:regime,
            dote:dote,
            codePersonne:codePersonne,
            codePersonneConjoint: codePersonneConjoint,
        },
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
    const data = await mariage.destroy({ where: { code: code } })
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


