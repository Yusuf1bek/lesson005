var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
console.log("OOP principles");
// 1. Inherintance - entities can inherit attributes from other entities  
var Person = /** @class */ (function () {
    function Person(name, age, isMarried) {
        this.name = name;
        this.age = age;
        this.isMarried = isMarried;
    }
    Person.prototype.getInfo = function () {
        return "".concat(this.name, " is ").concat(this.age, " year").concat(this.age > 1 ? "s" : "", " old");
    };
    return Person;
}());
var person = new Person("John", 32, true);
// console.log(person.getInfo());
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    function Student(name, age, course, isMarried) {
        var _this = _super.call(this, name, age, isMarried) || this;
        _this.course = course;
        return _this;
    }
    return Student;
}(Person));
var student = new Student("Yusufbek", 17, "n72", false);
// console.log(student);
// 2. Encapsulation - when an object only exposes the selected information 
var Car = /** @class */ (function () {
    function Car(name, narx, year) {
        this.name = name;
        this.price = narx;
        this.year = year;
    }
    return Car;
}());
var car = new Car("BMW", 95000, 2024);
// console.log(car);
// 3. Abstraction - hides complex details to reduce complexity
var Shape = /** @class */ (function () {
    function Shape() {
    }
    return Shape;
}());
var Rect = /** @class */ (function (_super) {
    __extends(Rect, _super);
    function Rect(a, b) {
        var _this = _super.call(this) || this;
        _this.a = a;
        _this.b = b;
        return _this;
    }
    Rect.prototype.calculatePerimetr = function () {
        return 2 * (this.a + this.b);
    };
    return Rect;
}(Shape));
var rectangle = new Rect(5, 6);
// console.log(rectangle.calculatePerimetr());
// 4. Polymorphism - entities can have more than one form 
