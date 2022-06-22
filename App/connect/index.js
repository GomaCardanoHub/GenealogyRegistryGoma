const Sequelize = require('sequelize');
const config = require('config');

const db = new Sequelize(config.get('database'),config.get('username'),config.get('password'),{
    host:'localhost',
    port: 3306,
    dialect:'mysql',
    pool: {
        max: 5,
        min: 0,
        acquire: 300000,
        idle:10000,
    }
})


module.exports = db;
