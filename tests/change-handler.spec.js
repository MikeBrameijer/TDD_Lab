// These test cases are all unfinished. We will finish them together.
describe("tests for change-handler", function() {

    // Set up a test below...
    it("inserts a coin and increases cash tendered", function() {
        // Remember, you can arrange, act, and assert...start small
        //arrange
        let changeHandler = new ChangeHandler(0,0);
        // Act and Assert
        expect(changeHandler.insertCoin(`penny`)).toBe(1);
        expect(changeHandler.insertCoin(`nickel`)).toBe(5);
        expect(changeHandler.insertCoin(`dime`)).toBe(10);
        expect(changeHandler.insertCoin(`quarter`)).toBe(25);
    });

    it("returns true if enough coins are inserted", function() {
        // Remember, you can arrange, act, and assert...start small
        //arrange
        let changeHandler = new ChangeHandler(20,0);
        // Act and Assert
        expect(changeHandler.isPaymentSufficient('1')).toBe(false);
        expect(changeHandler.isPaymentSufficient('20')).toBe(true);
        expect(changeHandler.isPaymentSufficient('21')).toBe(true);

    });

    it("tests the return change function", function() {
        // Remember, you can arrange, act, and assert...start small
        //arrange
        let changeHandler = new ChangeHandler(20,100);
        // Act and Assert
        // senerio where you get 80cents back
        expect(changeHandler.giveChange()).toEqual({quarters: 3, dimes: 0, nickels: 1,pennies: 0});
        changeHandler = new ChangeHandler(90,100);
        // Act and Assert
        // senerio where you get 10cents back
        expect(changeHandler.giveChange()).toEqual({quarters: 0, dimes: 1, nickels: 0,pennies: 0});
        changeHandler = new ChangeHandler(100,100);
        // Act and Assert
        // senerio where you get 0cents back
        expect(changeHandler.giveChange()).toEqual({quarters: 0, dimes: 0, nickels: 0,pennies: 0});
        changeHandler = new ChangeHandler(110,100);
        // Act and Assert
        // senerio where you get 0cents back because you havent paid enough
        expect(changeHandler.giveChange()).toEqual({quarters: 0, dimes: 0, nickels: 0,pennies: 0});

    });

});