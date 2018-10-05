'use strict';
const Sequelize = require('sequelize');
const sequelize = new Sequelize(
  'postgress://postgres:postgres@localhost/schedule_arranger',
  {
    logging: true,
    operatorsAliases: false
  }
);

module.exports = {
  database: sequelize,
  Sequelize: Sequelize
};