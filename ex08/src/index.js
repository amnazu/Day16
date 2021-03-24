class Person {
    constructor(name, email, age) {
           this.name = name;
           this.email = email;
           this.age = age;
    }
        getPerson() {
     
     var personInfo;
     return personInfo = `Name: ${this.name}, email: ${this.email}, age: ${this.age}`;
     
        
    }
}
let person = new Person("Amna", "amna@gmail.com", "25");
console.log(person.getPerson());

module.exports = Person;