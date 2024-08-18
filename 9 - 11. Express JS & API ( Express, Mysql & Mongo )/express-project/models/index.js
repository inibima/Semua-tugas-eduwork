const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('mydatabase', 'postgres', 'postgres', {
  host: 'postgres',
  dialect: 'postgres'
});

const User = require('./user')(sequelize);

module.exports = { sequelize, User };
