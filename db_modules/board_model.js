const db = require("../db")
const { Sequelize } = require('sequelize');
const { type } = require("os");
const { SELECT } = require("sequelize/types/query-types");
const { mainModule } = require("process");

const Board = db.define("Board", {
    type: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
    },
    description: Sequelize.STRING,
    rating: Sequelize.INTEGER
});

module.exports = {Board};