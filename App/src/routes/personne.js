const route = require('express').Router();
const PersonneModel = require('../models/ProvinceModel');


//Get all personnes
route.get('/',(req,res)=>{
    PersonneModel.findAll()
    .then((data)=>{
        res.json(data)
    })
    .catch(err=>res.json(err));
});

//Create a personne
route.post('/',(req,res)=>{
 
    const {nomComplet,sexe,dateNes,lieuNes,etatCivile,nationalite,genre,provinceDOrigine,CommuneTerritoirDOrigine,quartieSecteurDOrigine,avenueGroupementDOrigine,telphone,email} = res.body;
    if(!nomComplet||!sexe||!dateNes||!lieuNes||!etatCivile||!nationalite||!genre||!provinceDOrigine||!CommuneTerritoirDOrigine||!quartieSecteurDOrigine||!avenueGroupementDOrigine||!telphone||!email)return res.status(400).json({msg:'Remlisser tous les champs svp'});
    PersonneModel.create({nomComplet,sexe,dateNes,lieuNes,etatCivile,nationalite,genre,provinceDOrigine,CommuneTerritoirDOrigine,quartieSecteurDOrigine,avenueGroupementDOrigine,telphone,email})
    .then((data)=>{
        res.json(data)
    })
    .catch(err=>res.json(err));
})

//Update a personne
route.put('/:id',(req,res) =>{
    const id = req.params.id;
    const {nomComplet,sexe,dateNes,lieuNes,etatCivile,nationalite,genre,provinceDOrigine,CommuneTerritoirDOrigine,quartieSecteurDOrigine,avenueGroupementDOrigine,telphone,email} = res.body;
    if(!nomComplet||!sexe||!dateNes||!lieuNes||!etatCivile||!nationalite||!genre||!provinceDOrigine||!CommuneTerritoirDOrigine||!quartieSecteurDOrigine||!avenueGroupementDOrigine||!telphone||!email)return res.status(4000).json({msg:'Remlisser tous les champs svp'});
    PersonneModel.update({nomComplet,sexe,dateNes,lieuNes,etatCivile,nationalite,genre,provinceDOrigine,CommuneTerritoirDOrigine,quartieSecteurDOrigine,avenueGroupementDOrigine,telphone,email}, {where:{id}})
    .then((data)=>{
        res.json(data)
    })
    .catch(err=>res.json(err));

})

//Delete a personne
route.delete('/:id',(req,res) =>{
    const id = req.params.id;
    const {nomComplet,sexe,dateNes,lieuNes,etatCivile,nationalite,genre,provinceDOrigine,CommuneTerritoirDOrigine,quartieSecteurDOrigine,avenueGroupementDOrigine,telphone,email} = res.body;
    if(!nomComplet||!sexe||!dateNes||!lieuNes||!etatCivile||!nationalite||!genre||!provinceDOrigine||!CommuneTerritoirDOrigine||!quartieSecteurDOrigine||!avenueGroupementDOrigine||!telphone||!email)return res.status(4000).json({msg:'Remlisser tous les champs svp'});
    PersonneModel.destroy({nomComplet,sexe,dateNes,lieuNes,etatCivile,nationalite,genre,provinceDOrigine,CommuneTerritoirDOrigine,quartieSecteurDOrigine,avenueGroupementDOrigine,telphone,email}, {where:{id}})
    .then((data)=>{
        res.json(data)
    })
    .catch(err=>res.json(err));

})