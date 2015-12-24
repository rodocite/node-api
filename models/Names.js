var Sequelize = require('sequelize');
var db = new Sequelize('node_api', 'root', null, {
  host: 'localhost',
  dialect: 'mysql'
});

var Name = db.define('name', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: Sequelize.STRING
  }
}, {
  timestamps: false
});

module.exports = Name;
