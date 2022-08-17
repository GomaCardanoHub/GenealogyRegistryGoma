const express = require('express');
const agent = require("../controller/item.agentcontrol");
const avenue = require('../controller/item.avenuegroupementcontrole');
const commune = require('../controller/item.communesecteurchefferiecontrole');
const deced = require('../controller/item.decedcontrole');
const mariage = require('../controller/item.mariagecontrole');
const personne = require('../controller/item.personnecontrole');
const province = require('../controller/item.provincecontrole');
const login = require('../controller/item.usercontrole');
const { generateToken, verifyToken } = require('../util/token.helper');
const quartier = require("../controller/item.quartiercollectivitecontrole");
const ville = require("../controller/item.villeterritoirecontrole");
const router = express.Router();
// Router pour le mariage
router.post("/mariage/add", verifyToken, mariage.addMariage);//Add mariage 
router.get("/mariage/find", verifyToken, mariage.findAllMariage);// find mariage
router.post("/mariage/delete/:code", verifyToken, mariage.deleteMariage);//delete mariage
router.post("/mariage/update/:code", verifyToken, mariage.updateMariage);//update mariage
// Router pour le personne 
router.post('/personne/add', personne.addPersonne);//
router.get("/personne/find", personne.findAllPersonne);//
router.post("/personne/update/:id", personne.updatePersonne);//
router.post("/personne/delete/:id", personne.deletePersonne);//

// Router pour le deced 
router.post('/deced/add', deced.addDeced);//
router.get("/deced/find", deced.findAllDeced);//
router.post("/deced/update/:code",deced.updateDeced);//
router.post("/deced/delete/:code", deced.deleteDeced);//

// Router pour le province 
router.post('/province/add', province.addProvince);//
router.get("/province/find", province.findAllProvince);//
router.post("/province/update/:id", province.updateProvince);//
router.post("/province/delete/:id", province.deleteProvince);//

// Router pour le ville 
router.post('/ville/add', ville.addVilleTerritoir);//
router.get("/ville/find", ville.findAllVilleTerritoir);//
router.post("/ville/update/:id", ville.updateVilleTerritoir);//
router.post("/ville/delete/:id", ville.deleteVilleTerritoir);//

// Router pour le commune 
router.post("/commune/add", commune.addCommunesecteurchefferie);//
router.get("/commune/find", commune.findCommunesecteurchefferie);//
router.post("/commune/update/:id", commune.updateCommunesecteurchefferie);//
router.post("/commune/delete/:id", commune.deleteCommunesecteurchefferie);//

// Router pour le quartier 
router.post("/quartier/add", quartier.addQuartierCollectivite);//
router.get("/quartier/find", quartier.findAllQuartierCollectivite);//
router.post("/quartier/update/:id", quartier.updateQuartierCollectivite);//
router.post("/quartier/delete/:id", quartier.deleteQuartierCollectivite);//

// Router pour le avenue 
router.post("/avenue/add", avenue.addavenuegroupement);//
router.get("/avenue/find", avenue.findAllavenuegroupement);//
router.post("/avenue/update/:id", avenue.updateavenuegroupement);//
router.post("/avenue/delete/:id", avenue.deleteavenuegroupement);//

// Router pour le login 
router.post('/login/add', login.addusers);//
router.get('/login/find', login.findAllusers);//
router.post('/login/update/:id', login.updateusers);//
router.post('/login/delete/:id', login.deleteusers);//
router.post('/login/auth/', login.authenticateUser);//

// Router pour le agent 
router.post('/agent/add', agent.addagents);//
router.get('/agent/find',verifyToken ,agent.findAllagents);//
router.post('/agent/update/:id', agent.updateagents);//
router.post('/agent/delete/:id', agent.deleteagents);//


module.exports=router;