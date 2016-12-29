"use strict";

// function simple() {
//     console.log('Ghbdtn!');
// }
//
// simple(); // Ghbdtn!
//
// function hello(name) {
//     console.log('Здравствуй, ' + name + '!');
// }
// hello('Вася'); // Здравствуй, Вася!
// hello(); // Здравствуй, undefined!
// hello('Вася', 'Миша'); // Здравствуй, Вася!
//
//
// const helloExpression = function (name) {
//     return 'Здравствуй, ' + name + '!';
//
// };
//
// function helloReturned(name) {
//     // ... тут ваш клёвый код
//     return 'Здравствуй, ' + name + '!';
//     console.log('Эта фраза не покажется');
// }
//
// console.log(helloReturned(name));
//
// hello('Вася'); // Здравствуй, Вася!
// hello(); // Здравствуй, undefined!
// hello('Вася', 'Миша'); // Здравствуй, Вася!

// function helloOrBye(name, isBye) {
//     if (isBye) {
//         console.log('Чао, дорогой ' + name + '!');
//     } else {
//         console.log('Здравствуй, ' + name + '!');
//     }
// }
//
// helloOrBye('Вася', true); // Чао, дорогой Вася!
// helloOrBye('Вася', false); // Здравствуй, Вася!
// helloOrBye('Вася'); // Здравствуй, Вася!

// function helloOrBye(name, isBye) {
//     if (isBye) {
//         console.log('Чао, дорогой ' + name + '!');
//         return;
//     }
//     console.log('Здравствуй, ' + name + '!');
// }

// function helloOrBye(name, isBye) {
//     if (isBye) {
//         return 'Чао, дорогой ' + name + '!';
//     }
//     return 'Здравствуй, ' + name + '!';
// }

// function helloOrBye(name, isBye) {
//     return isBye ? 'Чао, дорогой ' + name + '!' : 'Здравствуй, ' + name + '!';
// }

// function helloOrBye(name, isBye) {
//     return (isBye ? 'Чао, дорогой ' : 'Здравствуй, ') + name + '!';
// }
//
// const helloOrBye = (name, isBye) => {
//     return (isBye ? 'Чао, дорогой ' : 'Здравствуй, ') + name + '!';
// };

// const helloOrBye = (name, isBye) => (isBye ? 'Чао, дорогой ' : 'Здравствуй, ') + name + '!';

// const helloOrBye = (name, isBye) => `${isBye ? 'Чао, дорогой' : 'Здравствуй,'} ${name}!`;

// function billy() {
//     var map = 'карта сокровищ';
//     return '– У меня нет никакой карты!';
// }
// console.log('– Где карта, Билли?');
// console.log(billy()); // – У меня нет никакой карты!
// console.log(map); // Error

// function billy() {
//     var map = 'карта сокровищ';
//     console.log('*взляд на сундук, где лежит ' + map + '*');
//     return '– У меня нет никакой карты!';
// }
//
// console.log('– Где карта, Билли?');
// console.log(billy());
// // *взляд на сундук, где лежит карта сокровищ*
// // – У меня нет никакой карты!
// console.log(map); // Error

// function billy() {
//     var map = 'карта сокровищ';
//     lookup();
//     return '– У меня нет никакой карты!';
//
//     function lookup() {
//         console.log('*взляд на сундук, где лежит ' + map + '*');
//     }
// }
//
// console.log('– Где карта, Билли?');
// console.log(billy());
// // *взляд на сундук, где лежит карта сокровищ*
// // – У меня нет никакой карты!
// console.log(map); // Error
//
// var name = 'Вася';
// function whoAreYou() {
//     var name = 'Вова';
//     console.log(name);
// }
// whoAreYou(); // Вова
// console.log(name); // Вася

// function createCounter () {
//     var value = 0;
//
//     return function () {
//         return value++;
//     }
// }
//
// var counter = createCounter();
// counter(); // 0
// counter(); // 1
// var counter2 = createCounter();
// counter2(); // 0

// function createCounter () {
//     var value = 0;
//
//     return {
//         next: function () {
//             return value++;
//         },
//         set: function (newValue) {
//             value = newValue;
//         },
//         reset: function () {
//           value = 0;
//         }
//     }
// }
//
// var counter = createCounter();
// counter.next(); // 0
// counter.next(); // 1
// counter.set(3);
// counter.next(); // 3

//
// if (true) {
//     var name = 'Вася';
// }
// name; // Вася
//
// for (var i=0; i < 3; i++) {
//     // ...
// }
// i; // 3

// if (true) {
//     const user = 'Вася';
// }
// user; // Error
//
// for (let i=0; i < 3; i++) {
// // ...
// }
// i; // ERROR
//
// function hoisting() {
//     console.log(user); // Error
//     let user;
// }
//
// for (var i = 0; i < 10; i++) {
//     setTimeout(function(){
//         console.log(i);
//     }, 1000);
// }
//
// //(10) 10
//
// for (var i = 0; i < 10; i++) {
//     (function(a) {
//         setTimeout(function(){
//             console.log(a);
//         }, 1000);
//     })(i);
// }
//
// for (var i = 0; i < 10; i++) {
//     setTimeout(function(a){
//         console.log(a);
//     }.bind(null, i), 1000);
// }
//
// funcA();

// function funcA () {
//     console.log(helper());
// }
//
// function funcB () {
//     console.log(helper());
// }
//
// function helper () {
//     return 'A';
// }

// function funcA () {
//     console.log(helper());
//
//     function helper () {
//         return 'A';
//     }
// }
//
// function funcB () {
//     console.log(helper());
//
//     function helper () {
//         return 'B';
//     }
// }
//

function doSomeMagicAndGetProp () {};

var obj = new Object();
var obj = {};
var obj = {
    x: 5
};

var user = {
    name: 'Вася',
    address: {
        city: 'Москва',
        street: 'Тверская'
    }
};

user.name; // Вася
user.address.city // Москва
user.secondName; // undefined
user['name'];

var prop = doSomeMagicAndGetProp(); // name
user.prop; // undefined
user[prop]; // Вася

user.name = 'Миша';
user.secondName = 'Боярский';

var a = {x: 1};
var b = a;
b.x = 2;
a.x // ?

function func(o) {
    o = {x: 2};
}

func(obj);

o.x;     // 1




