const route = require('express').Router();
const MariageModele = require('../models/MariageModel');

route.get('/',(req,res)=>{
    MariageModele.findAll()
    .then((data)=>{
        res.json(data)
    })
    .catch(err=>res.json(err));
});

route.post('/',(req,res)=>{
    const{lieuMariage,dateMariage,resudencePrencipal, resudenceActuel,ocupation,regime,dote,codePersonne,codePersonneConjoint} = req.body;
    if(!lieuMariage||!dateMariage||!resudencePrencipal||!resudenceActuel||!ocupation||!regime||!dote||!codePersonne||!codePersonneConjoint)return res.status(400).json({msg:'Remplissez tout les champs svp'});
    MariageModele.create({lieuMariage,dateMariage,resudencePrencipal, resudenceActuel,ocupation,regime,dote,codePersonne,codePersonneConjoint})
    .then((data)=>{
        res.json(data)
    })
    .catch(err=>res.json(err));
})