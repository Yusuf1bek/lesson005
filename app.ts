// console.log("OOP principles");

// // 1. Inheritance - entities can inherit attributes from other entities
// class Animal {
//     species: string;
//     habitat: string;
//     constructor(species: string, habitat: string) {
//         this.species = species;
//         this.habitat = habitat;
//     }
//     getDetails(): string {
//         return `The ${this.species} lives in the ${this.habitat}.`;
//     }
// }
// class Dog extends Animal {
//     breed: string;
//     constructor(species: string, habitat: string, breed: string) {
//         super(species, habitat);
//         this.breed = breed;
//     }
// }
// class Bird extends Animal {
//     canFly: boolean;
//     constructor(species: string, habitat: string, canFly: boolean) {
//         super(species, habitat);
//         this.canFly = canFly;
//     }
// }
// let dog = new Dog("Dog", "domestic areas", "Labrador");
// let bird = new Bird("Eagle", "mountains", true);
// // console.log(dog.getDetails());
// // console.log(bird.getDetails());

// // 2. Encapsulation - when an object only exposes the selected information
// class BankAccount {
//     private accountNumber: string;
//     public balance: number;
//     readonly bankName: string;
//     constructor(accountNumber: string, balance: number, bankName: string) {
//         this.accountNumber = accountNumber;
//         this.balance = balance;
//         this.bankName = bankName;
//     }
//     deposit(amount: number): void {
//         this.balance += amount;
//     }
//     getAccountNumber(): string {
//         return `Account number is confidential.`;
//     }
// }
// class UserProfile {
//     private password: string;
//     public username: string;
//     readonly email: string;
//     constructor(username: string, password: string, email: string) {
//         this.username = username;
//         this.password = password;
//         this.email = email;
//     }
//     login(password: string): boolean {
//         return this.password === password;
//     }
// }
// class LibraryBook {
//     private id: number;
//     public title: string;
//     readonly author: string;
//     constructor(id: number, title: string, author: string) {
//         this.id = id;
//         this.title = title;
//         this.author = author;
//     }
// }
// let account = new BankAccount("123456789", 1000, "MyBank");
// // console.log(account.getAccountNumber());
// // console.log(account.balance);

// // 3. Abstraction - hides complex details to reduce complexity
// abstract class Appliance {
//     abstract turnOn(): void;
//     abstract turnOff(): void;
// }
// class WashingMachine extends Appliance {
//     turnOn(): void {
//         console.log("Washing Machine is now ON.");
//     }
//     turnOff(): void {
//         console.log("Washing Machine is now OFF.");
//     }
// }
// class Television extends Appliance {
//     turnOn(): void {
//         console.log("Television is now ON.");
//     }
//     turnOff(): void {
//         console.log("Television is now OFF.");
//     }
// }
// class Computer extends Appliance {
//     turnOn(): void {
//         console.log("Computer is now ON.");
//     }
//     turnOff(): void {
//         console.log("Computer is now OFF.");
//     }
// }
// let tv = new Television();
// let wm = new WashingMachine();
// let pc = new Computer();
// // tv.turnOn();
// // wm.turnOff();
// // pc.turnOn();

// // 4. Polymorphism - entities can have more than one form
// class Vehicle {
//     move(): string {
//         return "The vehicle is moving.";
//     }
// }
// class Car extends Vehicle {
//     move(): string {
//         return "The car is driving.";
//     }
// }
// class Bicycle extends Vehicle {
//     move(): string {
//         return "The bicycle is pedaling.";
//     }
// }
// class Airplane extends Vehicle {
//     move(): string {
//         return "The airplane is flying.";
//     }
// }
// let car2 = new Car();
// let bicycle = new Bicycle();
// let airplane = new Airplane();
// // console.log(car2.move());
// // console.log(bicycle.move());
// // console.log(airplane.move());
