var Sequelize = require('sequelize');
var db = require('../db.config.js');

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

// Initializes a table based on the Name model's schema
// if one has not been created in the DB yet
Name.sync().then(() => {
  Name.describe().then(table => console.log('\n', table));
});

module.exports = Name;
