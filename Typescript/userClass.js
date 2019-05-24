var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var UserData = /** @class */ (function () {
    function UserData(name, city, age) {
        this.username = name;
        this.city = city;
        this.age = age;
    }
    UserData.prototype.register = function () {
        console.log(name + " is registered");
    };
    UserData.prototype.display = function () {
        console.log(" User details are  \n Name : " + this.username + "\n City : " + this.city + " \n Age : " + this.age + "\n");
    };
    return UserData;
}());
var Emp = /** @class */ (function (_super) {
    __extends(Emp, _super);
    function Emp(roll, username, city, age) {
        var _this = _super.call(this, username, city, age) || this;
        _this.empid = roll;
        return _this;
    }
    Emp.prototype.display = function () {
        console.log(" Emp details are  \n Empid : " + this.empid + "\n Name : " + this.username + "\n City : " + this.city + " \n Age : " + this.age + "\n");
    };
    return Emp;
}(UserData));
var ud1 = new UserData("Peter", "Bangalore", 25);
var user2 = new Emp(1, "Smith", "Mysore", 30);
var e1 = new Emp(2, "John", "Kolar", 45);
ud1.display();
user2.display();
e1.display();
