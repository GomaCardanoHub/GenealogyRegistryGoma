const url = require('../../config/dbconfig');
const { Sequelize, DataTypes } = require('sequelize');
const item = {}
const sequelize = new Sequelize(url.DB, url.USER, url.PASSWORD, {
    host: url.HOST,
    dialect: url.dialect,
    operatorsAliases: 0,
    port: url.PORT,
    pool: {
        max: url.pool.max,
        min: url.pool.min,
        acquire: url.pool.acquire,
        idle: url.pool.idle,
    },
});

sequelize
  .authenticate()
  .then(() => {
    console.log('Connected...')
  })
  .catch((error) => {
    console.log(`Failed to connect... ${error}`)
  })
item.Sequelize = Sequelize
item.sequelize = sequelize

item.personne = require('../models/PersonneModel')(sequelize, DataTypes);
item.mariage = require('../models/MariageModel')(sequelize, DataTypes);
item.deced = require('../models/DecedModel')(sequelize, DataTypes);
item.province = require('../models/ProvinceModel')(sequelize, DataTypes);
item.commune = require('../models/CommuneTerritoireModel')(sequelize, DataTypes);
item.quartier = require('../models/QuartieSecteurModel')(sequelize, DataTypes);
item.avenue = require('../models/AvenueGroupementModel')(sequelize, DataTypes);



item.sequelize
  .sync({ force: false })
  .then(() => {
    console.log(`Yes re-sync done...`)
  })
  .catch((error) => {
    console.log(`Failed to sync... ${error}`)
  })

module.exports = item