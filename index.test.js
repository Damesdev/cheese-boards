// DB Model Imports
const {User, Board, Cheese} = require("./index");


const {db} = require("./db");

// User Model Tests
describe("Testing User Model", () => {

    beforeAll(async () => {
        // the 'sync' method will create tables based on the model class
        // by setting 'force:true' the tables are recreated each time the 
        // test suite is run
        await db.sync({force:true});
        // bulk creating users
        User.bulkCreate([
            {
                name: "Damian",
                email: "Damian@gmail.com"
            },
            {
                name: "Abram",
                email: "Abram@gmail.com"
            },
            {
                name: "Nathaniel",
                email: "Nathaniel@gmail.com"
            },
        ]);
    
    });

    test("Testing User Creation", async () => {
        await User.create({
            name: "Test",
            email: "Test@domain.com"
        })

        expect(await User.count({where:{name:"Test"}})).toBe(1)

    });

    
});

// Board Model Tests
describe("Testing Board Model", () =>{

    beforeAll(async () =>{
        // bulk creating Boards
        Board.bulkCreate([
            {type: "Large", description: "Biggest", rating: 3 },
            {type: "Medium", description: "Middle", rating: 2},
            {type: "Small", description: "Tiniest", rating: 1},
        ]);
    });

    test("Testing Board Creation", async () => {
        await Board.create({
            type: "Test",
            description: "Has the good cheeses and good flavors",
            rating: 5,
        });

        expect(await Board.count({where:{type:"Test"}})).toBe(1);
    });
});

// Cheese Model Test
describe("Cheese Model Test", () => {
    beforeAll(async () =>{
        // bulk creating cheeses
        Cheese.bulkCreate([
            {title: "Provolone", description: "Round"},
            {title: "Swiss", description: "Holes"},
            {title: "American", description: "Yellow"},
        ])
    });

    test("Testing Cheese creation", async ()=>{
        // expect(await Cheese.count()).toBe(0)
        await Cheese.create({
            title: "Test",
            description: "for Testing"
        })
        expect(await Cheese.count({where:{title: "Test"}})).toBe(1)
    })

})

// Creating Association Testing
describe("Association Testing", () => {

    test("User/Board Association test", async () =>{
        // finding test board
        const testBoard = await Board.findOne({where:{type:"Test"}})
        // finding test User
        const testUser = await User.findOne({Where: {name:"Test"}})

        await testUser.addBoard()
    });


});