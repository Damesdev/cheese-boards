const {db} = require("./db");
const {User} = require("./db_modules/user_model.js");
const {Cheese} = require("./db_modules/cheese_model");
const {Board} = require("./db_modules/board_model"); 
const { Module } = require("module");

// Creating User/Board Association
User.hasMany(Board);
Board.belongsTo(User);

// Creating Board/Cheese Assocition
Board.belongsToMany(Cheese, through: Cheese);
Cheese.belongsToMany(Board);


module.exports = {Board, Cheese, User};