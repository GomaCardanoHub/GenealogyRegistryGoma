const router = require("express").Router();

const controlprovince = require("../controlleur/item.province");
const controlcommune = require("../controlleur/item.commune");
const controlquartier = require("../controlleur/item.quartier");
const controavenue = require("../controlleur/item.avenue");
//const contropersonne = require("../controlleur/item.personne");
//const contromariage = require("../controlleur/item.mariage");
const controdeced = require("../controlleur/item.deced");



router.post('/province/add', controlprovince.addProvince);
router.post('/commune/add', controlcommune.addCommune);
router.post('/quartier/add', controlquartier.addQuartier);
router.post('/avenue/add', controavenue.addAvenue);
//router.post('/personne/add', contropersonne.addPersonne);
//router.post('/mariage/add', contromariage.addMariage);
router.post('/deced/add', controavenue.addDeced);


router.get('/province/find', controlprovince.findAllProvince);
router.get('/commune/find', controlcommune.findAllCommune);
router.get('/quartier/find', controlquartier.findAllQuartier);
router.get('/avenue/find', controavenue.findAllAvenue);
//router.get('/personne/find', contropersonne.findPersonne);
//router.get('/mariage/find', contromariage.findAllMariage);
router.get('/deced/find', controavenue.findAllDeced);

module.exports=router;