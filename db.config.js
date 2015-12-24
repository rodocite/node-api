var Sequelize = require('sequelize');
var db = new Sequelize('node_api', 'root', null, {
  host: 'localhost',
  dialect: 'mysql'
});

module.exports = db;
