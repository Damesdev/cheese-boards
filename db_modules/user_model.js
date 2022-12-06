const {db} = require("../db");
const { Sequelize } = require('sequelize');

const User = db.define("User",{
    name: {
        type: Sequelize.STRING,
        allowNull: false 
        },
    email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
    },
});

module.exports = {User};