const {User} = require("./db_modules/user_model.js");
const {db} = require("./db");

describe("Testing User Database", () => {

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