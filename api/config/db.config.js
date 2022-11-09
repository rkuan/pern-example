const { Sequelize, Model, DataTypes } = require("sequelize");
const logger = require('../logger/api.logger');
const pg = require('pg');

const connect = () => {

    const hostName = "localhost";
    const userName = "olivialai"; //rkuan
    const password = "pgadmin"; //fill in password if you have one
    const database = "olivialai"; //rkuan
    const dialect = "postgres";

    const sequelize = new Sequelize(database, userName, password, {
        host: hostName,
        dialect: dialect,
        operatorsAliases: false,
        pool: {
            max: 10,
            min: 0,
            acquire: 20000,
            idle: 5000
        }
    });

    const db = {};
    db.Sequelize = Sequelize;
    db.sequelize = sequelize;
    db.tasks = require("/Users/olivialai/Desktop/pern-stack-example/api/model/task.model.js")(sequelize, DataTypes, Model); //fill in your path to task.model.js

    return db;

}

module.exports = {
    connect
}