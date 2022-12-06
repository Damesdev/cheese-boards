const {db} = require("../db")
const { Sequelize } = require('sequelize');


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