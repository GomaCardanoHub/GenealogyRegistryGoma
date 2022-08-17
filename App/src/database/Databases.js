const url = require('../../config/dbConfig')
const { Sequelize, DataTypes } = require('sequelize')
const item = {}
const sequelize =new Sequelize(url.DB, url.USER, url.PASSWORD, {
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
})
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

item.personne = require(`../model/ModelPersonne`)(sequelize, DataTypes)
item.mariage = require(`../model/ModelMariage`)(sequelize, DataTypes)
item.deced = require(`../model/ModelDeced`)(sequelize, DataTypes)
item.province = require(`../model/ModelProvince`)(sequelize, DataTypes)
item.villeTerritoir = require(`../model/ModelVilleTerritoir`)(sequelize, DataTypes)
item.communesecteurchefferie = require(`../model/ModelCommuneSecteurChefferies`)(sequelize, DataTypes)
item.quartiercollectivite = require(`../model/ModelQuartierCollectivite`)(sequelize, DataTypes)
item.avenuegroupement = require(`../model/ModelAvenueGroupement`)(sequelize, DataTypes)
item.users = require(`../model/ModelUser`)(sequelize, DataTypes)
item.agents = require(`../model/ModelAgent`)(sequelize, DataTypes)

item.sequelize
  .sync({ force: false })
  .then(() => {
    console.log(`Yes re-sync done...`)
  })
  .catch((error) => {
    console.log(`Failed to sync... ${error}`)
  })

module.exports = item
