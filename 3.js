// var owl = {
//     name: 'Сова',
//     says: function () {
//         console.log(this.name + ' говорит: ух!');
//     }
// };
//
// var bigOwl = {
//     name: 'Большая сова',
//     says: function () {
//         console.log(this.name + ' говорит: ух!');
//     }
// };
//
// owl.says === bigOwl.says; // false

// function Owl(name) {
//     this.name = name;
// }
//
// Owl.prototype.says = function () {
//     console.log(this.name + ' говорит: ух!');
// };
//
// var owl = new Owl('Сова');
// var bigOwl = new Owl('Большая сова');
//
// bigOwl.says = function () {
//     console.log(this.name + ' говорит: УХ!');
// };
//
// owl.says(); // Сова говорит: ух!
// bigOwl.says(); // Большая сова говорит: УХ!


// function Owl(name) {
//     this.name = name;
// }
//
// Owl.prototype.says = function () {
//     console.log(this.name + ' говорит: ух!');
// };
//
// Owl.prototype.toString = function () {
//     console.log('cова по имени ' + this.name);
// };
//
// var owl = new Owl('Сова');
//
// console.log(owl.toString()); // cова по имени Сова

// // console.dir(owl);
// console.log(owl.toString()); // [object Object]
// console.log({}.toString()); // [object Object]
//
// function Animal(name) {
//     this.name = name;
// }
//
// Animal.prototype.sleep = function () {
//     console.log(this.name + ' спит');
// };
//
// Animal.prototype.hunt = function () {
//     console.log(this.name + ' охотится');
// };

//
//
// function Owl(name) {
//     Animal.call(this, name);
// }

// var emptyConstructor = function () {};
// emptyConstructor.prototype = Animal.prototype;
// Owl.prototype = new emptyConstructor();
// Owl.prototype.says = function () {
//     console.log(this.name + ' говорит: ух!');
// };

// Owl.prototype = Object.create(Animal.prototype);
// Owl.prototype.constructor = Owl;


//
//
// var owl = new Owl('Сова');
// owl.sleep();
// owl.hunt();
// owl.says();

class Animal {
    constructor(name) {
        this.name = name;
    }

    sleep() {
        console.log(this.name + ' спит');
    }

    hunt() {
        console.log(this.name + ' охотится');
    }
}

class Owl extends Animal {
    constructor(name) {
        super(name);
    }

    says() {
        console.log(this.name + ' говорит: ух!');
    }
}

var owl = new Owl('Сова');

