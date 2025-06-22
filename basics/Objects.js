const person = {
    firstName: "Rejwanul Haque", 
    lastName: "Rajon",
    age: 25,
    getFullName: function () {
        return this.firstName+' '+this.lastName;
    }
}

console.log(person.getFullName())