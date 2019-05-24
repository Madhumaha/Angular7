function showuser(user) {
    return "User details are \n" + "name : " + user.name + "\n city : " + user.city + "\n age : " + user.age;
}
var user1 = { name: "John", city: "Mysore", age: 50 };
console.log(showuser(user1));
var showPerson = function (user) {
    return "User details are \n" + "name : " + user.name + "\n city : " + user.city + "\n age : " + user.age;
};
var person = { name: "Peter", city: "Bangalore", age: 56 };
console.log(showPerson(person));
