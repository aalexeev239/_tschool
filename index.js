// var n = 10;
// n = 3.14159265359;
// 0xff; // 255
// 3e5; // 30000
2 + 3; // 5
2 - 3; // -1
5 * 5; // 25
12 / 4; // 3
8 % 3; // 2

2 + '3'; // '23'
'2' + 3; // '23'
2 + true; // 3
true + true; // 2
2 + null; // 2
+(2 - 3); // -1
+'2' + +'3'; // 5
1 + 2 + '3'; // '33'
1 + (2 + '3'); // '123'

// var i = 1, j = ++i; //i = 2, j = 2;
// var i = 1, j = i++; //i = 2, j = 2;
// var i = 1, j = --i; //i = 0, j = 0;
// var i = 1, j = i--; //i = 0, j = 1;

2 > 1; // true
2 >= 1; // true
2 == 1; // false
2 != 1; // true
'2' > 1; // true
'01' == 1; // true
true == 1; // true
false == ''; // true
false === ''; // false

// if (2 > 5) {
//     // ...
// } else {
//     // ...
// }
//
// var x = (2 > 5) ? 'yep' : 'nope';
(1 + 2) * 4; // 12
3 + 4 * 5; // 23
// НЕ | NOT
// !a;

// И | AND
// a && b;

// ИЛИ | OR
// a || b;
//
// 42 || 'сорок два'; // 42
// false || 42 || veryComplexMath(14236487); // 42
// 42 && 'что-нибудь' && null; // null

// var i = 0;
// while (i < 3) {
//     console.log(i);
//     i++;
// }

// var i;
//
// for (i = 0; i < 3; i++) {
//     console.log(i);
// }

// for (var i = 0; i < 3; i++) {
//     console.log(i);
// }
//
// console.log(i); // 3

// var x = 3;
//
// Infinity;
//
// Infinity + 5;
//
// Infinity * 2;
//
// Infinity * -1;
//
// -Infinity;
//
// Infinity - Infinity;
//
// NaN;
//
var b = isNaN(x);
//
// NaN === NaN; // false
// isNaN(5); // false
// isNaN('моя панимать джиэс'); // true
//
// isFinite(1); // true
// isFinite(Infinity); // false
// isFinite(NaN); // false
//

// parseInt('100'); // 100
// parseInt('100раз'); // 100
// parseInt('раз 100'); // NaN
// parseInt('FF', 16); // 255
//
//
// parseFloat('3.14'); // 3.14
// parseFloat('314e-2'); // 3.14
// parseFloat('3.14чототам'); // 3.14
// parseFloat('FF'); // NaN

+'3.14'; // 3.14

// var n = 255;
// n.toString(16); // 'ff'

// var n = 12.34;
// n.toFixed(1); // '12.3'

Math.floor(3.14); // 3
Math.ceil(3.14); // 4
Math.round(3.14); // 3

// var n = 12.34;
// n.toFixed(1); // 12.3


0.1 + 0.2;

0.30000000000000004;

var n = 0.1 + 0.2;
+n.toFixed(10); // 0.3

// var str = 'Ночь темна и полна ужасов';
// str = "Зима близко";

'\u0024'; // $

'Глаза боятся\nА руки крюки';
// Глаза боятся
// А руки крюки


'O\'Reilly';
//
// var str = 'qwerty';
// str.length; // 6
// str.charAt(0); // 'q'
// str[0]; // 'q'
//
// var str = 'Превед медвед'.toUpperCase(); // 'ПРЕВЕД МЕДВЕД'
// str.toLowerCase(); // 'превед медвед'
//
//
// var str = "Widget with id";
// str.indexOf("Widget"); // 0
// str.indexOf("id"); // 1
// str.indexOf("widget"); // -1
//
//
//
// var str = 'A Lannister Always Pays His Debts';
// str.slice(2,11); // Lannister
// str.slice(-5); // Debts
//
//
// var name = 'Джон Сноу';
// 'Ничего ты не знаешь, ' + name; // Ничего ты не знаешь, Джон Сноу
//
// 'а' > 'я'; // false
// 'ё' > 'я'; // true
// 'ёлки'.localeCompare('палки'); // -1

// var n = true;
// n = false;
//
//
// var a = 3;
// var b = 2;
// if (a > b) {
//     // ...
// }
//
// var condition = a > b;
// if (condition) {
//     // ...
// }
//
//
// false;
// undefined;
// null;
// 0;
// -0;
// NaN;
// '';

// var x = null;
//
//
// var x; // undefined
//
// var user = { name: 'Вася', age: 20 };

// var a = 1;
// var b = a;
// b = 2;
// a; // ?
//

// var a = {x: 1};
// var b = a;
// b.x = 2;
// a; // Object {x: 2}


// var a = { user: 'Вася', age: 20 };
//
// typeof undefined // "undefined"
//
// typeof 0 // "number"
//
// typeof true // "boolean"
//
// typeof "foo" // "string"
//
// typeof {} // "object"
//
// typeof null // "object"
//
// typeof function(){} // "function"

// const I_AM_CONST = 10;
// let i = 0;
// i = i + 1;

switch(x) {
    case 'value1':  // if (x === 'value1')
    // ...
    break;

    case 'value2':  // if (x === 'value2')
    // ...
    break;

    default:
    // ...
    break;
}




//--------------


// "10" + " попугаев"
// 10 + " попугаев"
//
// "10 попугаев"
//
// "10" + 1
// "101"
//
// "10" - 1
// 9
//
// "10попугаев" - 1
// NaN
//
//
// true + "false"
// "truefalse"
//
// var x;
// "123" + x;
// "123undefined"
//
// Number(123)
// 123
//
// +"123"
// 123
//
// 0 + undefined
// NaN
//
// null + 0
// 0
//
// true + 1
// 2
//
// 1 - false
// 1
//
// +"   \n  123   \n  \n"
// 123
//
// +null
//
// null >= 0 // true
// null > 0 // false
// null == 0 // false
//
// !true // false
// !!true // true
//
// !!"0" // true
// !!" " // true
//
// !123 // false
// !!123 // true
//
//
// var x = 'Вася';
// x = 'Миша';
// x = 4;
// x = x + 1; // 5
//
// var _ = 1;
// var $ = 1;
// var o_O = 1;
// var test1 = 1;
// var camelCase = 1;
// var CONST_CASE = 3.14;
//
// var переменная = 'OCHEN_PLOHO';

// a = 1;

// "use strict";
//
// console.log(a); // undefined
// a = 1;
// console.log(a); // 1
// var a;



// for (var i = 0; i < 3; i++) {
//     console.log(i);
// }
//
// console.log(i); // 3

    for (let i = 0; i < 3; i++) {
        console.log(i);
    }

    console.log(i); // Uncaught ReferenceError: i is not defined

