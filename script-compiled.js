'use strict';

//zadanie 1 :

console.log('Zadanie pierwsze');
// dodanie do siebie dwoch zmiennych
var greeting = 'Hello';
var greetingSecond = 'Beautiful World';

var result = 'The answer is: ' + greeting + ' ' + greetingSecond;
console.log(result);

// zadanie 2 :
// funkcja multiply , wyrazenie funkcyjne ( arrow functions )
console.log('Zadanie drugie');
var multiply = function multiply() {
    var a = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
    var b = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
    return a * b;
};
console.log('' + multiply(5));

// zadanie 3 :

console.log('Zadanie trzecie');
var average = function average() {
    for (var _len = arguments.length, argument = Array(_len), _key = 0; _key < _len; _key++) {
        argument[_key] = arguments[_key];
    }

    var sum = 0;
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
        for (var _iterator = argument[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var arg = _step.value;
            sum += arg;
        }
    } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
    } finally {
        try {
            if (!_iteratorNormalCompletion && _iterator.return) {
                _iterator.return();
            }
        } finally {
            if (_didIteratorError) {
                throw _iteratorError;
            }
        }
    }

    return sum; //zwraca let
};

console.log(average(1)); // 1
console.log(average(1, 2)); // 3
console.log(average(1, 2, 3)); // 6

// zadanie 4 :

console.log('Zadanie czwarte');
var grades = [1, 5, 5, 5, 4, 3, 3, 2, 1]; //tablica
var newGrades = average.apply(undefined, grades); // nowa tablica z poprzednim zadaniem
console.log(newGrades);

// zadanie 5 :

console.log('Zadanie piate');
// [1, 4, 'Iwona', false, 'Nowak'] wyciagniecie z tablicy :
var info = [1, 4, 'Iwona', false, 'Nowak'];
var Name = info[2],
    LastName = info[4];

console.log(Name + ' ' + LastName);
