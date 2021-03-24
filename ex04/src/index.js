class Pets {
    constructor(name, legs) {
        this.legs = legs;
        this.name = name;
    }
    walk() {
        var numberOfLegs = (`${this.name} is walking on ${this.legs} legs`);
        return numberOfLegs;
    }
}
class Dog extends Pets {
    constructor(name, legs) {
        super(name, legs)
    }
    bark() {
        var dogSay = (`${this.name} says WUF-WUF`);
        return dogSay;
    }
}

let dog = new Dog("Pujdo", 4);
console.log(dog.walk());
console.log(dog.bark());

module.exports = {
    Pets,
    Dog
}






