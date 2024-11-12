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

describe ("feed", () => {
    it ("Decreases hunger by 3", () => {
        const pet = new Pet("Jimmy");
        pet.hunger = 5;
        pet.feed();
        expect(pet.hunger).toEqual(2);
    });
    it("Doesn't allow hunger to drop below 0", () => {
        const pet = new Pet("Jimmy");
        pet.hunger = 1;
        pet.feed();
        expect(pet.hunger).toEqual(0);
    });
});

describe ("checkUp", () => {
    it ("returns message if fitness is 3 or less", () => {
        const pet = new Pet("Jimmy");
        pet.fitness = 3;
        pet.checkUp();
        expect(pet.checkUp()).toEqual("I need a walk");
    });
    it ("returns message if hunger is 5 or more", () => {
        const pet = new Pet;
        pet.hunger = 5;
        pet.checkUp();
        expect(pet.checkUp()).toEqual("I am hungry");
    });
    it ("returns message if both of the above are true", () => {
        const pet = new Pet;
        pet.fitness = 3;
        pet.hunger=5;
        pet.checkUp();
        expect(pet.checkUp()).toEqual("I am hungry AND I need a walk");
    });
    it ("returns message if neither of the first two are true", () => {
        const pet = new Pet;
        pet.fitness = 6;
        pet.hunger = 2;
        pet.checkUp();
        expect(pet.checkUp()).toEqual("I feel great!");
    });
});
