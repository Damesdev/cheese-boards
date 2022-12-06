const {db} = require("./db.js");
const Sequelize = require("./sequelize")

const User = await db.define("User",{
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