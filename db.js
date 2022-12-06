const Sequelize = require("./Sequelize")

const db = new Sequelize({
    langage: 'sqlite',
    storage: 'db.sqlite',
})

module.exports = db;