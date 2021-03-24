class Person {
    constructor(name, email, age) {
           this._name = name;
           this._email = email;
           this._age = age;
    }
        getPerson() {
     
     var personInfo;
     return personInfo = `Name: ${this._name}, email: ${this._email}, age: ${this._age}`;
     
        
    }
}
let person = new Person();
person.getPerson();

module.exports = Person;