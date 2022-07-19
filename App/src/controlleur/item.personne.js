const {personne} = require('../models/ProvinceModel');

const item = {}

//Create a personne
item.addPersonne=async(req,res)=>{
 try{
    const {nomComplet,sexe,dateNes,lieuNes,etatCivile,nationalite,genre,provinceDOrigine,CommuneTerritoirDOrigine,quartieSecteurDOrigine,avenueGroupementDOrigine,telphone,email} = res.body;
    if(!nomComplet||!dateNes||!lieuNes||!etatCivile||!nationalite||!genre||!provinceDOrigine||!CommuneTerritoirDOrigine||!quartieSecteurDOrigine||!avenueGroupementDOrigine||!telphone)return res.status(400).json({msg:'Remlisser tous les champs svp'});
    const data = await personne.create({
        nomComplet: nomComplet,
        dateNes:dateNes,
        lieuNes:lieuNes,
        etatCivile:etatCivile,
        nationalite:nationalite,
        genre:genre,
        provinceDOrigine:provinceDOrigine,
        CommuneTerritoirDOrigine:CommuneTerritoirDOrigine,
        quartieSecteurDOrigine:quartieSecteurDOrigine,
        avenueGroupementDOrigine:avenueGroupementDOrigine,
        telphone:telphone,
        email:email
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
//Get all personnes
item.findPersonne = async (req, res) => {
  try {
    const data = await personne.findAll()
    if (data) {
      return res.status(200).json({ msg: `Liste des personnes `, data: data })
    } else {
      return res.status(404).json({ msg: `Not Data`, data: null })
    }
  } catch (error) {
    return res.status(500).json({ msg: `${error}`, data: null })
  }
}

//Update a personne
item.updatePersonne= async (req, res) => {
    try {
       
    const code = req.params.code;
    const {nomComplet,sexe,dateNes,lieuNes,etatCivile,nationalite,genre,provinceDOrigine,CommuneTerritoirDOrigine,quartieSecteurDOrigine,avenueGroupementDOrigine,telphone,email} = res.body;
    if(!nomComplet||!sexe||!dateNes||!lieuNes||!etatCivile||!nationalite||!genre||!provinceDOrigine||!CommuneTerritoirDOrigine||!quartieSecteurDOrigine||!avenueGroupementDOrigine||!telphone)return res.status(4000).json({msg:'Remlisser tous les champs svp'});
    const data = await personne.update({
        nomComplet: nomComplet,
        dateNes:dateNes,
        lieuNes:lieuNes,
        etatCivile:etatCivile,
        nationalite:nationalite,
        genre:genre,
        provinceDOrigine:provinceDOrigine,
        CommuneTerritoirDOrigine:CommuneTerritoirDOrigine,
        quartieSecteurDOrigine:quartieSecteurDOrigine,
        avenueGroupementDOrigine:avenueGroupementDOrigine,
        telphone:telphone,
        email:email
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

//Delete a personne
item.deletePersonne = async (req, res) => {
    try {
       
    const code = req.params.code;
    const data = await personne.destroy({
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
