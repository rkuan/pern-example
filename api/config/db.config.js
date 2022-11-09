const { Sequelize, Model, DataTypes } = require("sequelize");
const logger = require('../logger/api.logger');
const pg = require('pg');

const connect = () => {

    const hostName = "localhost";
    const userName = "wesleytong" //rkuan
    const password = "wesley25433"; //fill in password if you have one
    const database = "wesleytong"; //rkuan
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
    db.tasks = require("/Users/wesleytong/Downloads/pern-example-main/api/model/task.model.js")(sequelize, DataTypes, Model); //fill in your path to task.model.js

    return db;

}

module.exports = {
    connect
}