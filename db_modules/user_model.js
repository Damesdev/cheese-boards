const sequelize = require("./db.js");
const Sequelize = require("./sequelize")

const User = await sequelize.define("User",{
    name: {
        Sequelize.STRING,
        allowNull: false 
        },
    email: {
        Sequelize.STRING,
        allowNull: false,
        unique: true
    },
})

module.exports = {User};