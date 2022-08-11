const {deced} = require('../connect/index');

const item = {}

//Create a deceds
item.addDeced=async(req,res)=>{
 try{
    const {lieuDeced,dateDeced,resudencePrencipal,resudenceActuel,occupation,motifDeced,codePersonne} = res.body;
    if(!lieuDeced||!dateDeced||!resudencePrencipal||!resudenceActuel||!occupation||!motifDeced||!codePersonne)return res.status(400).json({msg:'Remlisser tous les champs svp'});
    const data = await deced.create({
        lieuDeced: lieuDeced,
        dateDeced: dateDeced,
        resudencePrencipal: resudencePrencipal,
        resudenceActuel: resudenceActuel,
        occupation: occupation,
        motifDeced: motifDeced,
        codePersonne:codePersonne
    })
         if (data) {
      return res
        .status(200)
        .json({ msg: `Enregistrement reussi avec succes`, data: data })
    } else {
      return res.status(400).json({ msg: `Enregistrement echoue`, data: null })
    }
  } catch (error) {
    return res.status(500).json({ msg: `${error}`, data: null })
  }

}
//Get all deceds
item.findAllDeced = async (req, res) => {
  try {
    const data = await deced.findAll()
    if (data) {
      return res.status(200).json({ msg: `Liste des deceds `, data: data })
    } else {
      return res.status(404).json({ msg: `Not Data`, data: null })
    }
  } catch (error) {
    return res.status(500).json({ msg: `${error}`, data: null })
  }
}

//Update a deceds
item.updateDeced= async (req, res) => {
    try {
       
    const code = req.params.code;
   const {lieuDeced,dateDeced,resudencePrencipal,resudenceActuel,occupation,motifDeced,codePersonne} = res.body;
    if(!lieuDeced||!dateDeced||!resudencePrencipal||!resudenceActuel||!occupation||!motifDeced||!codePersonne)return res.status(400).json({msg:'Remlisser tous les champs svp'});
   const data = await deced.create({
        lieuDeced: lieuDeced,
        dateDeced: dateDeced,
        resudencePrencipal: resudencePrencipal,
        resudenceActuel: resudenceActuel,
        occupation: occupation,
        motifDeced: motifDeced,
        codePersonne:codePersonne
    }, 
     { where: { code: code } },
    )
      
    if (data) {
      return res
        .status(200)
        .json({ msg: `Modification reussi avec succes`, data: data })
    } else {
      return res.status(400).json({ msg: `Modification echoue`, data: null })
    }
  } catch (error) {
    return res.status(500).json({ msg: `${error}`, data: null })
  }
        
}

//Delete a deced
item.deletePersonne = async (req, res) => {
    try {
       
    const code = req.params.code;
    const data = await deced.destroy({
        where: { code: code } ,
    })
    if (data) {
      return res
        .status(200)
        .json({ msg: `Suppression reussi avec succes`, data: data })
    } else {
      return res.status(400).json({ msg: `Suppression echoue`, data: null })
    }
  } catch (error) {
    return res.status(500).json({ msg: `${error}`, data: null })
  }
} 
