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
    }
};

module.exports = Pet;