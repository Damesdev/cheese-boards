// DB Model Imports
const {User} = require("./db_modules/user_model.js");
const {Board} = require("./db_modules/board_model")
const { Cheese } = require("./db_modules/cheese_model.js");

const {db} = require("./db");



// User Model Tests
describe("Testing User Model", () => {

    beforeAll(async () => {
        // the 'sync' method will create tables based on the model class
        // by setting 'force:true' the tables are recreated each time the 
        // test suite is run
        await db.sync({ force: true });
    });

    test("Testing User Creation", async () => {
        await User.create({
            name: "Damian",
            email: "email@domain.com"
        })

        expect(await User.count()).toBe(1)
    });

});

// Board Model Tests
describe("Testing Board Model", () =>{
    // beforeAll(async ()=> {
    //     await db.sync({force:true})
    // });

    test("Testing Board Creation", async () => {
        await Board.create({
            type: "Greatest",
            description: "Has the good cheeses and good flavors",
            rating: 5,
        })

        expect(await Board.count()).toBe(1);
    })
})

// Cheest Model Test
describe("Cheese Model Test", () => {
    // beforeAll(async () => {
    //     await db.sync({force:true})
    // })

    test("Testing Cheese creation", async ()=>{
        expect(await Cheese.count()).toBe(0)
        await Cheese.create({
            title: "Pepper Jack",
            description: "Has peppers and is slightly spicy"
        })
        expect(await Cheese.count()).toBe(1)
    })

})