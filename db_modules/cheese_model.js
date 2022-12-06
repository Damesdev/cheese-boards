const {db} = require("../db.js");
const Sequelize = require('sequelize')

const Cheese = db.define("Cheese", {
    title: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
    },
    description: Sequelize.STRING,
})

module.exports = {Cheese};