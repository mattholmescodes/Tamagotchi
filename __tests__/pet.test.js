const Pet = require("../src/pet");

describe ("constructor", () => {
    it ("Returns an object", () => {
        expect (new Pet ("Jimmy")).toBeInstanceOf(Object);
    });
    it ("Sets a name property", () => {
        const pet = new Pet("Jimmy");
        expect (pet.name).toEqual("Jimmy");
    });
    it("Has an initial age of 0", () => {
        const pet = new Pet("Jimmy");
        expect (pet.age).toEqual(0);
    });
    it("Has an initial hunger of 0", () => {
        const pet = new Pet("Jimmy");
        expect (pet.hunger).toEqual(0);
    });
    it("Has an initial fitness of 10", () => {
        const pet = new Pet("Jimmy");
        expect(pet.fitness).toEqual(10);
    });
});

describe ("growUp", () => {
    it ("Increments age by 1", () => {
        const pet = new Pet("Jimmy");
        pet.growUp();
        expect(pet.age).toEqual(1);
    });
    it ("Increments hunger by 5", () => {
        const pet = new Pet("Jimmy");
        pet.growUp();
        expect(pet.hunger).toEqual(5);
    });
    it ("Reduces fitness by 3", () => {
        const pet = new Pet("Jimmy");
        pet.growUp();
        expect(pet.fitness).toEqual(7);
    });
});

describe ("walk", () => {
    it ("Increases fitness by 4", () => {
        const pet = new Pet("Jimmy");
        pet.fitness = 5;
        pet.walk();
        expect(pet.fitness).toEqual(9);
    });
    it ("increases fitness up to max value of 10", () => {
        const pet = new Pet("Jimmy");
        pet.fitness = 7;
        pet.walk();
        expect(pet.fitness).toEqual(10);
    });
});
