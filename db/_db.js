const Sequelize = require('sequelize');

const dbConnection = new Sequelize('postgres://localhost:5432/pass');

module.exports = dbConnection;
