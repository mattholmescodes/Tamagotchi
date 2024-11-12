function Pet (name) {
    this.name = name;
    this.age = 0;
    this.hunger = 0;
    this.fitness = 10;
    this.growUp = function() {
        this.age+=1;
        this.hunger+=5;
        this.fitness-=3;
    };
    this.walk = function() {
        if (this.fitness > 6) {
            this.fitness = 10;
        } else {
            this.fitness +=4;
        };
    };
    this.feed = function() {
        if (this.hunger < 3) {
            this.hunger = 0;
        } else {
            this.hunger -=3;
        }
    };
    this.checkUp = function() {
        if (this.fitness <= 3 && this.hunger >= 5) {
            return ("I am hungry AND I need a walk")
        } else if (this.hunger >= 5) {
            return ("I am hungry");
        } else if (this.fitness <= 3) {
            return ("I need a walk")
        } else {
            return ("I feel great!");
        };
    };
    this.isAlive = function() {
        if (this.fitness <= 0) {
            return false;
        } else if (this.hunger >= 10) {
            return false;
        } else if (this.age >= 30) {
            return false;
        } else {
            return true;
        };
    };
};



module.exports = Pet;