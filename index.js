const {db} = require("./db");
const {User} = require("./db_modules/user_model.js");
const {Cheese} = require("./db_modules/cheese_model");
const {Board} = require("./db_modules/board_model"); 

// Creating User/Board Association
User.hasMany(Board);
Board.belongsTo(User);
Board.hasOne(User);


// Creating Board/Cheese Assocition
Board.belongsToMany(Cheese, {
    through: "board_cheese"
});
  
Cheese.belongsToMany(Board, {
    through: "board_cheese"
});

module.exports = {Board, Cheese, User};