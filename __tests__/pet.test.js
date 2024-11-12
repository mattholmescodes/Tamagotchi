const Pet = require("../src/pet");



describe ("constructor", () => {
    it ("Returns an object", () => {
        expect (new Pet ("Jimmy")).toBeInstanceOf(Object);
    });
    it ("Sets a name property", () => {
        const pet = new Pet("Jimmy");
        expect (pet.name).toEqual("Jimmy");
    });
});
